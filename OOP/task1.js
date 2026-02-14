import Book from './Book.js';
import EBook from './EBook.js';
//Task1
const book1 = new Book("Philosopher's Stone ", 'J.K. Rowling', 1997);
const book2 = new Book('Chamber of Secrets', 'J.K. Rowling', 1998);
const book3 = new Book('Prisoner of Azkaban', 'J.K. Rowling', 1999);
//Task2
const ebook1 = new EBook('Goblet of Fire', 'J.K. Rowling', 1999, '.pdf');
const ebook3 = new EBook('Tiny beautiful things', 'Cheryl Strayed', 2022, '.docx');
//Task3
const book4 = new Book('', 'J.K. Rowling', 2002);
const book5 = new Book('Order of the Phoenix', '', 2003);
const book6 = new Book('Half-Blood Prince', 'J.K. Rowling', 1899);
const ebook2 = new EBook('Deathly Hallows', 'J.K. Rowling', 2007, 1);
//Task4
const Books = [book1, book2, book3, ebook1, ebook3];

const oldestBook = Book.returnOldestBook(Books);

if (oldestBook) {
	oldestBook.printInfo();
}

//Task5
const ebook4 = EBook.fromBook(book1, '.pdf');

console.log('Task1: ');
book1.printInfo();
book2.printInfo();
book3.printInfo();
console.log('Task2: ');
ebook1.printInfo();
ebook3.printInfo();
console.log('Task3: ');
book4.printInfo();
book5.printInfo();
book6.printInfo();
ebook2.printInfo();
console.log('Task4: The oldest book is  ');
oldestBook.printInfo();
console.log('Task5: ');
ebook4.printInfo();
