// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB8KgMRr5iC1lmUVaQ-25nP9gB_No5nyu8",
    authDomain: "summer-camp-photo-client-site.firebaseapp.com",
    projectId: "summer-camp-photo-client-site",
    storageBucket: "summer-camp-photo-client-site.appspot.com",
    messagingSenderId: "84915142463",
    appId: "1:84915142463:web:75b6ccce41e6fedea21d8a"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);