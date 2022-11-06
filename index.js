import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore";
import { initAddMemberForm } from "./add";
import { firebaseConfig } from "./config";
import { renderMemberList } from "./list";
import { initEditMemberForm } from "./edit";
import "./node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./node_modules/bootstrap/dist/js/bootstrap";

const app = initializeApp(firebaseConfig);
const database = getFirestore(app);
const membersCollection = collection(database, "members");

renderMemberList(membersCollection, database);
initAddMemberForm(membersCollection);
initEditMemberForm(database);