
function Book(title, author, pages, haveRead){
    this.title = title, 
    this.author = author, 
    this.pages = pages, 
    this.haveRead = haveRead
}

function addBookToLibrary(){
    // user input
    let bookTitle = prompt("Enter a book titile");
    let author = prompt("Enter the author of your book")
    let pages = parseInt(prompt("Enter the number of pages in this book"));
    
    let haveRead = prompt("Have you read this book?");
    if(haveRead == 'yes'){
        haveRead = 'have read';
    } else if (haveRead == 'no'){
        haveRead = 'has not read yet';
    }
    
    let newBook = new Book(bookTitle, author, pages, haveRead);
    
    bookLibrary.push(newBook);
}


// library array
let bookLibrary = [
    
    
];

// manually add books
const theHobbit = new Book("The Hobbit", "J.R.R Tolkein", 295, "has not read yet");
const atomicHabits = new Book("Atomic Habits", "Stephen Clear", 320, "has read");
const theAlchemist = new Book("The Alchemist", "Paulo Coelho", 208, "has read");
bookLibrary.push(theHobbit);
bookLibrary.push(atomicHabits);
bookLibrary.push(theAlchemist);

// check user input for adding a book
addBookToLibrary();

// display the books
const listOfBooks = document.getElementById('libraryItems');
displayBooks();

// view library
console.log(bookLibrary);


function displayBooks(){
    
    for(let i = 0; i < bookLibrary.length; i++) {
      const listItem = document.createElement('li');
      listItem.textContent = `Title: ${bookLibrary[i].title}, Author: ${bookLibrary[i].author}, Pages: ${bookLibrary[i].pages}, Read status: ${bookLibrary[i].haveRead}`;
      listOfBooks.appendChild(listItem);
    }
}

