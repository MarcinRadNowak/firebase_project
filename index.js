import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore";
import { initAddMemberForm, initAddBookForm } from "./add";
import { firebaseConfig } from "./config";
import { renderMemberList, renderBookList } from "./list";
import { initEditMemberForm,initEditBookForm } from "./edit";
import "./node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./node_modules/bootstrap/dist/js/bootstrap";

const app = initializeApp(firebaseConfig);
const database = getFirestore(app);
const membersCollection = collection(database, "members");
const booksCollection = collection(database, "books")

renderMemberList(membersCollection, database);
renderBookList(booksCollection, database);
initAddMemberForm(membersCollection);
initAddBookForm(booksCollection);
initEditMemberForm(database);
initEditBookForm(database);