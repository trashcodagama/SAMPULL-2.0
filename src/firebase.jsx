import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"



const firebaseConfig = {
  apiKey: "AIzaSyDH9as5pbTbrdmhPr-843f7jZQODX_ERnM",
  authDomain: "sampull-6666.firebaseapp.com",
  projectId: "sampull-6666",
  storageBucket: "sampull-6666.appspot.com",
  messagingSenderId: "330547575653",
  appId: "1:330547575653:web:651f6d31a5c5d592caff8c",
  measurementId: "G-Q1LH3BX914",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app)
