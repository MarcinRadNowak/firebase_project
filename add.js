import { addDoc } from "firebase/firestore";

export const initAddMemberForm = (membersCollection) => {
  const addMemberForm = document.querySelector("#addMemberForm");

  if (addMemberForm) {
    addMemberForm.addEventListener("submit", (event) => {
      event.preventDefault();

      const formData = new FormData(addMemberForm);

      addDoc(membersCollection, {
        fname: formData.get("fname"),
        lname: formData.get("lname"),
        member_id: formData.get("member_id"),
      }).then((result) => {
        console.log("Czytelnik został dodany do firestore");
        console.log(result);
      });
    });
  }
};
// ---------------
export const initAddBookForm = (booksCollection) => {
  const addBookForm = document.querySelector("#addBookForm");

  if (addBookForm) {
    addBookForm.addEventListener("submit", (event) => {
      event.preventDefault();

      const formData = new FormData(addBookForm);

      addDoc(booksCollection, {
        fname: formData.get("fname"),
        lname: formData.get("lname"),
        title: formData.get("title"),
      }).then((result) => {
        console.log("Książka została dodana do firestore");
        console.log(result);
      });
    });
  }
};

