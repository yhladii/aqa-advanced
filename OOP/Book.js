class Book {
    constructor(name, author, year) {
        this.errors = {}; 
        this.name = name;
        this.author = author;
        this.year = year;
    }

    printInfo() {
        if (Object.keys(this.errors).length > 0) {
            console.log("Please check your entered data:");
            console.log(this.errors);
            return;
        }

        console.log(`The book "${this.name}" written by ${this.author} in ${this.year} year`);
    }

    set name(value) {
        if (!value) {
            this.errors.name = "Book name is required";
        } else {
            this._name = value;
            delete this.errors.name;
        }
    }

    get name() {
        return this._name;
    }

    set author(value) {
        if (!value) {
            this.errors.author = "Author is required";
        } else {
            this._author = value;
            delete this.errors.author;
        }
    }

    get author() {
        return this._author;
    }

    set year(value) {
        if (value <= 0) {
            this.errors.year = "Year must be a positive number";
        } else {
            this._year = value;
            delete this.errors.year;
        }
    }

    get year() {
        return this._year;
    }
static returnOldestBook(books) {
    if (!Array.isArray(books) || books.length === 0) {
        return null;
    }

    let oldestBook = null;

    for (let i = 0; i < books.length; i++) {
        const book = books[i];

        if (!book || typeof book.year !== "number") {
            continue; 
        }

        if (!oldestBook || book.year < oldestBook.year) {
            oldestBook = book;
        }
    }

    return oldestBook;
}
}
export default Book















