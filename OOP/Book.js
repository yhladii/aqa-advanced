class Book {
  constructor(name, author, year) {
    this.name = name;
    this.author = author;
    this.year = year;
  }

  printInfo() {
    console.log(`The book "${this.name}" written by ${this.author} in ${this.year} year`);
  }

  set name(value) {
    if (!value || typeof value !== "string") {
      throw new Error("Book name is required and must be a string");
    }
    this._name = value;
  }

  get name() {
    return this._name;
  }

  set author(value) {
    if (!value || typeof value !== "string") {
      throw new Error("Author is required and must be a string");
    }
    this._author = value;
  }

  get author() {
    return this._author;
  }

  set year(value) {
    if (value <= 1990) {
      throw new Error("Year must be >1990");
    }
    this._year = value;
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
export default Book;
