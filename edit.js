import { updateDoc, doc, collection } from "firebase/firestore";
import { renderMemberList } from "./list";

export const initEditMemberForm = (database) => {
  const editMemberForm = document.querySelector("#editMemberForm");
  const membersCollection = collection(database, "members");

  if (editMemberForm) {
    editMemberForm.addEventListener("submit", (event) => {
      event.preventDefault();

      const formData = new FormData(editMemberForm);

      const docRef = doc(database, "members", formData.get("id"));
      const modalRef = new bootstrap.Modal("#editMemberModal");

      updateDoc(docRef, {
        fname: formData.get("fname"),
        lname: formData.get("lname"),
        member_id: formData.get("member_id"),
      }).then((result) => {
        console.log("Zaktualizowano czytelnika");

        modalRef.hide();

        renderMemberList(membersCollection, database);
      });
    });
  }
};
