import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Createquizz from './Components/Pages/Createquizz';
import Topicwisequiz from './Components/Topics/Topicwisequiz';
import Signup from './Components/Signup/Signup';
import Layout from './Layout';
import Login from './Components/Login/Login';
import SigninPage from './Components/SigninPage/SigninPage';
import {
  createBrowserRouter,

  RouterProvider,
} from "react-router-dom";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App/>,
//   },
//   {
//     path: "quiz",
//     element: <Createquizz/>,
//   },
//   {
//     path: "Topicwise_quiz",
//     element: <Topicwisequiz/>,
//   },
// ]);
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children:[
      {
        path: "/",
        element: <App/>,
      },
      {
        path: "quiz",
        element: <Createquizz/>,
      },
      {
        path: "Topicwise_quiz",
        element: <Topicwisequiz/>,
      },
      {
        path: "Signup",
        element: <SigninPage/>,
      },
      {
        path: "Login",
        element: <Login/>,
      },
      {
        path: "SignupWithEmail",
        element: <Signup/>,
      },
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router}/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
