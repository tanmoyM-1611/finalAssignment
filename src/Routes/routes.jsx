import {
    createBrowserRouter
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Allclasses from "../pages/Classes/AllClasses/Allclasses";
import AllInstructors from "../pages/Instructors/AllInstructors/AllInstructors";
import Signup from "../pages/SignUp/Signup";
import Login from "../pages/Login/Login";
import Dashboard from "../Layout/Dashboard";
import PrivateRoute from "./PrivateRoute";
import Allusers from "../pages/Dashboard/Allusers/Allusers";
import ManageClasses from "../pages/Dashboard/ManageClasses/ManageClasses";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path:'/',
            element:<Home></Home>
        },
        {
          path:'/classes',
          element:<Allclasses></Allclasses>
        },
        {
          path:'/instructors',
          element:<AllInstructors></AllInstructors>
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/signup',
          element:<Signup></Signup>
        }
      ]
    },
    {
      path:'dashboard',
      element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
      children:[
        {
          path:'allusers',
          element:<Allusers></Allusers>
        },
        {
          path:'manageClasses',
          element:<ManageClasses></ManageClasses>
        }
      ]
     

    }
  ]);


