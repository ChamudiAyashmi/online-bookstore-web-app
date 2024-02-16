import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/home/Home";
import BookDetails from "../Pages/bookDetails/BookDetails";
import Shop from "../Pages/shop/shop";
import About from "../Pages/about/About";
import ManageBooks from "../Pages/ManageBooks/ManageBooks";
import MyApp from "../MyApp";
import Login from "../Pages/login/Login";
import ViewBook from "../Pages/viewBooks/ViewBook";
import UpdateBook from "../Pages/updateBook/UpdateBook";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/",
    element: <MyApp />,
    children: [  
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/book-details/:id",
        element: <BookDetails />,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/book/${params.id}`),
      },
      {
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/manage-books",
        element: <ManageBooks />,
      },
      {
        path: "/view-books",
        element: <ViewBook />,
      },
      {
        path: "/edit-books/:id",
        element: <UpdateBook />,
        loader: ({params}) => fetch(`http://localhost:3000/book/${params.id}`)
      }
    ],
  },
]);

export default router;
