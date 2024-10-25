// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD_iXoXUT3HqJ6yykWykUDDg1hhFZ1ImFQ",
  authDomain: "ecommerce-app-c4b1e.firebaseapp.com",
  projectId: "ecommerce-app-c4b1e",
  storageBucket: "ecommerce-app-c4b1e.appspot.com",
  messagingSenderId: "454402155265",
  appId: "1:454402155265:web:841f297009ddf426443100",
  measurementId: "G-715XQRS3XG",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export { storage };
