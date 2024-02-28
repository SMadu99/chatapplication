// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage, ref } from "firebase/storage";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDM44ojNV3iXjmAVoP2YRlUseZXK3FdM0Q",
  authDomain: "chat-7c103.firebaseapp.com",
  projectId: "chat-7c103",
  storageBucket: "chat-7c103.appspot.com",
  messagingSenderId: "942667263579",
  appId: "1:942667263579:web:c8353af34404318735d97e"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();