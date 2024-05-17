import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCGGLACiluUB0orOi2aQCKwJKQMfB4sFmY",
  authDomain: "gyankosh-react-app.firebaseapp.com",
  projectId: "gyankosh-react-app",
  storageBucket: "gyankosh-react-app.appspot.com",
  messagingSenderId: "636197809167",
  appId: "1:636197809167:web:e9c6c0f4d9141ace11c77a"
};

const app = initializeApp(firebaseConfig);
export const auth=getAuth();
export default app;
export const db=getFirestore(app);
