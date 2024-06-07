import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./routes/layout/layout";
import Homepage from "./routes/homepage/HomePage.jsx";
import ListPage from "./routes/listPage/listPage";
import SinglePage from "./routes/singlePage/singlePage";
import ProfilePage from "./routes/profilePage/profilePage";

function App() {
   const router = createBrowserRouter([
      {
         path: "/",
         element: <Layout />,
         children: [
            {
               path: "/",
               element: <Homepage />,
            },
            {
               path: "/list",
               element: <ListPage />,
            },
            {
               path: "/:id",
               element: <SinglePage />,
            },
            {
               path: "/profile",
               element: <ProfilePage />,
            },
            //  {
            //    path:"/login",
            //    element:<Login/>
            //  },
            //  {
            //    path:"/register",
            //    element:<Register/>
            //  }
         ],
      },
   ]);
   return <RouterProvider router={router} />;
}

export default App;
