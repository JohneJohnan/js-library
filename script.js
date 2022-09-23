const table = document.querySelector("table");
const title = document.getElementById("title");
const author = document.getElementById("author");
const pages = document.getElementById("pages");
const read = document.getElementById("read");
const btn = document.getElementById("add");

const library = [];

btn.addEventListener('click', () => {
    addBookToLibrary(title.value, author.value, pages.value, read.checked);
});

function book(title, author, numberOfPages, read) {
    this.title = title;
    this.author = author;
    this.numberOfPages = numberOfPages;
    this.read = read;
    this.info = function() {
        return this.title + ' by ' + this.author + ', ' + this.numberOfPages + ' pages, ' + (this.read ? 'read' : 'not read yet');
    };
}

function addBookToLibrary(...args) {
    library.push(new book(args[0], args[1], args[2], args[3]));
    const tr = document.createElement("tr");
    tr.dataset.index = library.length - 1;

    addFirst3Cells(tr, args);
    addReadBtn(tr, args[3]);
    addDelBtn(tr);

    table.appendChild(tr);
}

function addFirst3Cells(tRow, args) {
    for(let i = 0; i < 3; i++) {
        const td = document.createElement('td');
        td.textContent = args[i];
        tRow.appendChild(td);
    }
}

function addReadBtn(tRow, value) {
    const readTd = document.createElement('td');
    const span = document.createElement("span");
    span.textContent = value;
    readTd.appendChild(span);
    checkBox = document.createElement("input");
    checkBox.setAttribute("type", "checkbox");
    checkBox.checked = value;
    checkBox.addEventListener('change', e => {toggleRead(tRow, span);});
    readTd.appendChild(checkBox);
    tRow.appendChild(readTd);
}

function addDelBtn(tRow) {
    delBtn = document.createElement('button');
    delBtn.textContent = "Delete";
    delBtn.addEventListener('click', e => {delBook(tRow);});
    const td = document.createElement('td');
    td.appendChild(delBtn);
    tRow.appendChild(td);
}

function delBook(bookRow) {
    library.splice(bookRow.dataset.index, 1);
    bookRow.remove();
}

function toggleRead(bookRow, span) {
    library[bookRow.dataset.index].read = !library[bookRow.dataset.index].read;
    span.textContent = library[bookRow.dataset.index].read;
}