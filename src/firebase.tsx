
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDVBXCYMuAtmDbXcHhvA6I4DsXZGFlyEGI",
  authDomain: "desafiohub.firebaseapp.com",
  projectId: "desafiohub",
  storageBucket: "desafiohub.firebasestorage.app",
  messagingSenderId: "794985687521",
  appId: "1:794985687521:web:8f56da514c6ed9293bcaa0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };