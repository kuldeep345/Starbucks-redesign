import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD3c3O2yk08IO-Yv6CUKEwJOWUUyiNjcCQ",
  authDomain: "starbucks-clone-174da.firebaseapp.com",
  projectId: "starbucks-clone-174da",
  storageBucket: "starbucks-clone-174da.appspot.com",
  messagingSenderId: "962017522481",
  appId: "1:962017522481:web:2bf9b7e417b715e9227610"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth }