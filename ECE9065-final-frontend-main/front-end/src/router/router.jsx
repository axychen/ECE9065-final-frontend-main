import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import React, { Component } from 'react';
import SignupPage from "../pages/Signup";
import SigninPage from "../pages/SignIn";
import MainPage from "../pages/mainPage";
import HomePage from "../pages/Home";
import AdministratorPage from "../pages/administratorPage";
import DMCAPage from "../pages/dmcaPage";
import AUPPage from "../pages/aupPage";
import PrivacyPolicyPage from "../pages/privacyPolicyPage";


const router = createBrowserRouter([
    
        {
          path: "/",
          element: <MainPage />,
        },
        {
          path: "/signup",
          element: <SignupPage />,
        },
        {
          path: "/admin",
          element: <AdministratorPage />,
        },
        {
          path: "/signin",
          element: <SigninPage />,
        },
        {
          path: "/home",
          element: <HomePage />,
        },
        {
          path: "/dmca",
          element: <DMCAPage />,
        },
        {
          path: "/aup",
          element: <AUPPage />,
        },
        {
          path: "/privacypolicy",
          element: <PrivacyPolicyPage />,
        }
    
  ]);

export default router;

  