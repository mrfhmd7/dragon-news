// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCj5Wl0RhU4wkSc4DBKCyx1KM2WOX5VAx0",
  authDomain: "the-news-dragon-b47e9.firebaseapp.com",
  projectId: "the-news-dragon-b47e9",
  storageBucket: "the-news-dragon-b47e9.appspot.com",
  messagingSenderId: "996379190811",
  appId: "1:996379190811:web:4b76a639b231835a4c3abe"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;