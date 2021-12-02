// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBk50nVjhoOar1zEIgTPI0Fgo93juOI1J0",
  authDomain: "simple-todo-vue-f6904.firebaseapp.com",
  projectId: "simple-todo-vue-f6904",
  storageBucket: "simple-todo-vue-f6904.appspot.com",
  messagingSenderId: "310001869531",
  appId: "1:310001869531:web:d728918368a711d976e2fe"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app