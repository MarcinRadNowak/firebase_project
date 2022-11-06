import { addDoc } from "firebase/firestore";

export const initAddMemberForm = (membersCollection) => {
  const addMemberForm = document.querySelector("#addMemberForm");

  if (addMemberForm) {
    addMemberForm.addEventListener("submit", (event) => {
      event.preventDefault();

      const formData = new FormData(addMemberForm);

      // const deadlineDate = new Date(formData.get("deadline"));
      // const deadlineTimestamp = Timestamp.fromDate(deadlineDate);

      addDoc(membersCollection, {
        fname: formData.get("fname"),
        lname: formData.get("lname"),
        member_id: formData.get("number_id"),
      }).then((result) => {
        console.log("Czytelnik został dodany do firestore");
        console.log(result);
      });
    });
  }
};

