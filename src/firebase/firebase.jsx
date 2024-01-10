import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCm8MrIqIFHgflHCd7bBoMXDIkavGIKLQo",
  authDomain: "bharat-f4886.firebaseapp.com",
  databaseURL: "https://bharat-f4886-default-rtdb.firebaseio.com",
  projectId: "bharat-f4886",
  storageBucket: "bharat-f4886.appspot.com",
  messagingSenderId: "409818555933",
  appId: "1:409818555933:web:ff29e73093527a949688f4",
  measurementId: "G-BYSVR8J15J"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider(app)

export {
    app,
    auth,
    provider,
}