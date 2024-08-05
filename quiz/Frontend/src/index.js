import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Createquizz from './Components/Pages/Createquizz';
import Topicwisequiz from './Components/TopicsWiseQuiz/Topicwisequiz';
import Layout from './Layout';
import SigninPage from './Components/SigninPage/SigninPage';
import LoginPage from './Components/LoginPage/LoginPage';
import {
  createBrowserRouter,

  RouterProvider,
} from "react-router-dom";
import QuizQuestionDetails from './Components/TopicsWiseQuiz/QuizQuestionDetails';
import Dashboard from './Components/Dashboard/Dashboard';
import Contact from './Components/Contact/Contact';

import TakeQuiz from './Components/Dashboard/TakeQuiz';

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
        path: "signup",
        element: <SigninPage/>,
      },
      {
        path: "Loginp",
        element: <LoginPage/>,
      },
      {
       path:"QuizQuestionDetails",
       element:<QuizQuestionDetails/>,
      },
      {
        path: "Dashboard",
        element: <Dashboard/>,
      },
      {
        path:"Contact",
        element:<Contact/>,
      },

      {
        path:"TakeQuiz",
        element:<TakeQuiz/>
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