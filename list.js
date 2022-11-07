import {
  deleteDoc,
  doc,
  getDocs,
  orderBy,
  query,
  updateDoc,
} from "firebase/firestore";

export const renderMemberList = (membersCollection, db) => {
  if (!membersCollection) {
    throw new Error("Parametr membersCollection nie został podany");
  }

  const membersList = document.querySelector("#membersList");

  if (membersList) {
    const order = "asc";
    const membersQuery = query(membersCollection, orderBy("member_id", order));

    getDocs(membersQuery).then((result) => {
      membersList.innerHTML = "";

      result.docs.forEach((doc) => {
        const member = doc.data();
        const memberId = doc.id;

        const editButton = `<button class="btn btn-primary" data-edit="${memberId}" data-fname="${member.fname}" data-lname="${member.lname}" data-member_id="${member.member_id}">Edit</button>`;
        const deleteButton = `<button class="btn btn-danger" data-delete="${memberId}">Delete</button>`;
        const li = `<li class="list-group-item d-flex justify-content-between align-items-center"><span>${member.member_id}. ${member.fname} ${member.lname}</span> <div>${editButton} ${deleteButton}</div></li>`;

        membersList.innerHTML += li;
      });

      handleEditButtons();
      handleDeleteButtons(db);
    });
  }
};

const handleEditButtons = () => {
  const buttons = document.querySelectorAll("[data-edit]");
  const editMemberForm = document.querySelector("#editMemberForm");
  const fnameInput = editMemberForm.querySelector("[name='fname']");
  const lnameInput = editMemberForm.querySelector("[name='lname']");
  const memberidInput = editMemberForm.querySelector("[name='member_id']");
  const idInput = editMemberForm.querySelector("[name='id']");

  buttons.forEach((button) =>
    button.addEventListener("click", (event) => {
      const modalRef = new bootstrap.Modal("#editMemberModal");
      const element = event.target;

      modalRef.show();

      fnameInput.value = element.dataset.fname;
      lnameInput.value = element.dataset.lname;
      idInput.value = element.dataset.edit;
      memberidInput.value = element.dataset.member_id;
    })
  );
};

const handleDeleteButtons = (db) => {
  const buttons = document.querySelectorAll("[data-delete]");

  buttons.forEach((button) =>
    button.addEventListener("click", (event) => {
      const element = event.target;
      const memberId = element.dataset.delete;

      const docRef = doc(db, "members", memberId);

      deleteDoc(docRef).then((result) => {
        element.parentNode.parentNode.remove();
      });
    })
  );
};

// books

export const renderBookList = (booksCollection, db) => {
  if (!booksCollection) {
    throw new Error("Parametr booksCollection nie został podany");
  }

  const booksList = document.querySelector("#booksList");

  if (booksList) {
    const order = "asc";
    const booksQuery = query(booksCollection, orderBy("title", order));

    getDocs(booksQuery).then((result) => {
      booksList.innerHTML = "";

      result.docs.forEach((doc) => {
        const book = doc.data();
        const bookId = doc.id;

        const editButton = `<button class="btn btn-primary" data-edit="${bookId}" data-fname="${book.fname}" data-lname="${book.lname}" data-title="${book.title}">Edit</button>`;
        const deleteButton = `<button class="btn btn-danger" data-delete="${bookId}">Delete</button>`;
        const li = `<li class="list-group-item d-flex justify-content-between align-items-center"><span>${book.fname} ${book.lname} - ${book.title}</span> <div>${editButton} ${deleteButton}</div></li>`;

        booksList.innerHTML += li;
      });

      handleEditBookButtons();
      handleDeleteBookButtons(db);
    });
  }
};

const handleEditBookButtons = () => {
  const buttons = document.querySelectorAll("[data-edit]");
  const editBookForm = document.querySelector("#editBookForm");
  const fnameInput = editBookForm.querySelector("[name='fname']");
  const lnameInput = editBookForm.querySelector("[name='lname']");
  const titleInput = editBookForm.querySelector("[name='title']");
  const idInput = editBookForm.querySelector("[name='id']");

  buttons.forEach((button) =>
    button.addEventListener("click", (event) => {
      const modalRef = new bootstrap.Modal("#editBookModal");
      const element = event.target;

      modalRef.show();

      fnameInput.value = element.dataset.fname;
      lnameInput.value = element.dataset.lname;
      idInput.value = element.dataset.edit;
      titleInput.value = element.dataset.title;
    })
  );
};

const handleDeleteBookButtons = (db) => {
  const buttons = document.querySelectorAll("[data-delete]");

  buttons.forEach((button) =>
    button.addEventListener("click", (event) => {
      const element = event.target;
      const bookId = element.dataset.delete;

      const docRef = doc(db, "books", bookId);

      deleteDoc(docRef).then((result) => {
        element.parentNode.parentNode.remove();
      });
    })
  );
};
