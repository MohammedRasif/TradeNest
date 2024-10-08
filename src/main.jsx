import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Root.jsx";
import Home from "./Home.jsx";
import Login from "./components/Pages/Login.jsx";
import Register from "./components/Pages/Register.jsx";
import AuthProvider from "./components/Provider/AuthProvider.jsx";
import Promotions from "./components/Pages/Promotions.jsx";
import Delivery from "./components/Pages/Delivery.jsx";
import VeganMeat from "./components/VeganMeat/VeganMeat.jsx";
import VeganMeatDetails from "./components/VeganMeat/VeganMeatDetails.jsx";
import Vegan from "./components/Pages/Vegan.jsx";
import DashboardLayout from "./components/Dashboard/Layout/DashboardLayout.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path:"/promotions",
        element:<Promotions></Promotions>,
      },
      {
        path:"/delivery",
        element:<Delivery></Delivery>
      }
      ,
      {
        path:"/veganMeat",
        element:<VeganMeat></VeganMeat>
      },
      {
        path:"/veganMeat/:id",
        element:<VeganMeatDetails></VeganMeatDetails>,
        loader:() => fetch('/VeganMeat.json')
      },
      {
        path:"/vegan",
        element:<Vegan></Vegan>
      }
    ],
  },

  {
    path: "/dashboard",
    element: (
        <DashboardLayout></DashboardLayout>
    ),
    // children: [
    //   {
    //     index: true,
    //     element: 
    //   },
    // ]
  }
]);

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
