import Book from "./Book.js";

class EBook extends Book {
  constructor(name, author, year, format) {
    super(name, author, year);
    this.format = format;
  }
  printInfo() {
    console.log(
      `The book "${this.name}" written by ${this.author} in ${this.year} year. Available in ${this.format} format`,
    );
  }

  set format(value) {
    if (!value || typeof value !== "string") {
      throw new Error("Please enter valid format");
    }
    this._format = value;
  }
  get format() {
    return this._format;
  }
  static fromBook(book1, format) {
    return new EBook(book1.name, book1.author, book1.year, format);
  }
}
export default EBook;
