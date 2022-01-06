function readingList(books) {
  // Write your code here...

  let contentEl = document.querySelector("#content");
  let ulEl = document.createElement("ul");
  ulEl.textContent = "List of books:";
  contentEl.appendChild(ulEl);
  for (let book of books) {
    let liEl = document.createElement("li");
    liEl.style.listStyle = "none";
    contentEl.appendChild(liEl);
    let pEl = document.createElement("p");
    pEl.textContent = `${book.title} -
  ${book.author}`;
    liEl.appendChild(pEl);

    let imgEl = document.createElement("img");
    imgEl.setAttribute("src", "./img/" + book.title + ".jpeg");

    if (book.alreadyRead === true) {
      liEl.style.backgroundColor = "green";
    } else {
      liEl.style.backgroundColor = "red";
    }
    liEl.appendChild(imgEl);
    ulEl.appendChild(liEl);
  }
}

const books = [
  {
    title: "The Design of Everyday Things",
    author: "Don Norman",
    alreadyRead: false,
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    alreadyRead: true,
  },
  {
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    alreadyRead: true,
  },
];

readingList(books);
