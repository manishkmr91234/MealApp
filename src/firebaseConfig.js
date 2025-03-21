// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// import { getAuth, GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth";
import { getAuth} from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCvQvhnjLnQpBikZO98R288UBxpNi0w86Y",
  authDomain: "authentication-d748d.firebaseapp.com",
  projectId: "authentication-d748d",
  storageBucket: "authentication-d748d.firebasestorage.app",
  messagingSenderId: "5548992802",
  appId: "1:5548992802:web:e974a86678caa1ca931d7b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

// Social auth providers
// const googleProvider = new GoogleAuthProvider();
// const facebookProvider = new FacebookAuthProvider();

// export { auth, googleProvider, facebookProvider };