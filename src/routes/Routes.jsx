import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import ProjectDetails from "../components/ProjectDetails";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children:[
        {
        path:'/',
        element:<Home></Home>
        },
    ]
    },
    {
      path: "/project/:id", // Dynamic path to capture project ID
      element: <ProjectDetails />, 
    },
  ]);
  