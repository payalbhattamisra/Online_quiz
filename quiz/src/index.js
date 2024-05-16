import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Createquizz from './Pages/Createquizz';
import Topicwisequiz from './Topics/Topicwisequiz';
import Layout from './Layout';
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
