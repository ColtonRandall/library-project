// library array
let bookLibrary = [];

// manually add books
const theHobbit = new Book("The Hobbit", "J.R.R Tolkein", 295, "has not read yet");
bookLibrary.push(theHobbit)

// check user input for adding a book
addBookToLibrary();

// view library
console.log(bookLibrary);

// ------------------------------------------------------------------------------------

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
