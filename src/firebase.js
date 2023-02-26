import { initializeApp } from "firebase/app";
import { getDatabase } from 'firebase/database'
import { getAuth } from 'firebase/auth'
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCfi-3ISbK82ZI4jk5keCHg7hnxCRU1rGs",
  authDomain: "designer-aca93.firebaseapp.com",
  projectId: "designer-aca93",
  storageBucket: "designer-aca93.appspot.com",
  messagingSenderId: "210938589225",
  appId: "1:210938589225:web:446a73ddd3997c19deec38"
};

export const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export const auth = getAuth(app)
export const storage = getStorage(app);