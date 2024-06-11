import { AuthContext } from "@/context/AuthContext";
import { SocketContext } from "@/context/SocketContext";
import apiRequest from "@/lib/apiRequest";
import { useNotificationStore } from "@/lib/notificationStore";
import { useContext, useEffect, useRef, useState } from "react";
import { format } from "timeago.js";

function Chat({ chats }) {
   const [chat, setChat] = useState(null);
   const { currentUser } = useContext(AuthContext);
   const { socket } = useContext(SocketContext);

   const messageEndRef = useRef();

   const decrease = useNotificationStore((state) => state.decrease);

   useEffect(() => {
      messageEndRef.current?.scrollIntoView({ behavior: "smooth" });
   }, [chat]);

   const handleOpenChat = async (id, receiver) => {
      try {
         const res = await apiRequest("/chats/" + id);
         if (!res.data.seenBy.includes(currentUser.id)) {
            decrease();
         }
         setChat({ ...res.data, receiver });
      } catch (err) {
         console.log(err);
      }
   };

   const handleSubmit = async (e) => {
      e.preventDefault();

      const formData = new FormData(e.target);
      const text = formData.get("text");
      console.log(text);

      if (!text) return;
      try {
         const res = await apiRequest.post("/messages/" + chat.id, { text });
         setChat((prev) => ({
            ...prev,
            messages: [...prev.messages, res.data],
         }));
         e.target.reset();
         socket.emit("sendMessage", {
            receiverId: chat.receiver.id,
            data: res.data,
         });
      } catch (err) {
         console.log(err);
      }
   };

   useEffect(() => {
      const read = async () => {
         try {
            await apiRequest.put("/chats/read/" + chat.id);
         } catch (err) {
            console.log(err);
         }
      };

      if (chat && socket) {
         socket.on("getMessage", (data) => {
            if (chat.id === data.chatId) {
               setChat((prev) => ({
                  ...prev,
                  messages: [...prev.messages, data],
               }));
               read();
            }
         });
      }
      return () => {
         socket.off("getMessage");
      };
   }, [socket, chat]);

   return (
      <div className="flex flex-col h-[calc(100vh-100px)]">
         <div className="flex-1 flex flex-col gap-[20px] overflow-y-scroll">
            <h1 className="font-[300]">Messages</h1>

            {chats?.map((c) => (
               <div
                  className="bg-white p-5 rounded-[10px] flex items-center gap-5 cursor-pointer "
                  key={c.id}
                  style={{
                     backgroundColor:
                        c.seenBy.includes(currentUser.id) || chat?.id === c.id
                           ? "white"
                           : "#fecd514e",
                  }}
                  onClick={() => handleOpenChat(c.id, c.receiver)}
               >
                  <img
                     src={c.receiver.avatar || "/noavatar.jpg"}
                     alt=""
                     className="h-10 w-10 object-cover rounded-full"
                  />
                  <span className="font-bold">{c.receiver.username}</span>
                  <p>{c.lastMessage}</p>
               </div>
            ))}
         </div>
         {chat && (
            <div className="flex-1 bg-white flex flex-col justify-between">
               <div className=" bg-[#f7c14b85] p-5 font-bold flex items-center justify-between ">
                  <div className="flex items-center gap-[20px]">
                     <img
                        src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                        alt=""
                        className=" h-[30px] w-[30px] rounded-full object-cover "
                     />
                     John Doe
                  </div>
                  <span
                     className="cursor-pointer"
                     onClick={() => setChat(null)}
                  >
                     X
                  </span>
               </div>
               <div className="h-[350px] overflow-scroll p-5 flex flex-col gap-5 ">
                  {chat.messages.map((message) => (
                     <div
                        className="w-1/2"
                        style={{
                           alignSelf:
                              message.userId === currentUser.id
                                 ? "flex-end"
                                 : "flex-start",
                           textAlign:
                              message.userId === currentUser.id
                                 ? "right"
                                 : "left",
                        }}
                        key={message.id}
                     >
                        <p>{message.text}</p>
                        <span className="text-[12px] bg-[#f7c14b39] p-0.5 rounded-[5px] ">
                           {format(message.createdAt)}
                        </span>
                     </div>
                  ))}
                  <div ref={messageEndRef}></div>
               </div>
               <form
                  onSubmit={handleSubmit}
                  className=" h-14 flex items-center justify-between"
               >
                  <textarea
                     name="text"
                     className=" flex-[3] h-full border-none p-5 "
                  ></textarea>
                  <button className="flex-1 bg-yellow-700/100 h-full border-none cursor-pointer ">
                     Send
                  </button>
               </form>
            </div>
         )}
      </div>
   );
}

export default Chat;
