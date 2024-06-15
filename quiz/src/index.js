import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Createquizz from './Components/Pages/Createquizz';
import Topicwisequiz from './Components/Topics/Topicwisequiz';
import Layout from './Layout';
import SigninPage from './Components/SigninPage/SigninPage';
import LoginPage from './Components/LoginPage/LoginPage';
import {
  createBrowserRouter,

  RouterProvider,
} from "react-router-dom";
import QuizQuestionDetails from './Components/QuizQuestionDetails/QuizQuestionDetails';
import Dashboard from './Components/Dashboard/Dashboard';
import Data from './Components/Data/QuizQuestion';
import Contact from './Components/Contact/Contact';
import TakeQuiz from './Components/Dashboard/TakeQuiz';
import EnterCode from './EnterCode/EnterCode';
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
        path:"Start_Quiz",
        element:<Data/>,
      },
      {
        path:"Contact",
        element:<Contact/>,
      },
      {
        path:"TakeQuiz",
        element:<TakeQuiz/>
      },
      {
        path:"EnterCode",
        element:<EnterCode/>,
       }
      
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