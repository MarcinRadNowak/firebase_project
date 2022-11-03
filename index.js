import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./config";
import { collection, getDocs, getFirestore } from "firebase/firestore";

const app = initializeApp(firebaseConfig);
const database = getFirestore(app)
const booksCollection = collection(database, "books");


