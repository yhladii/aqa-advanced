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




















// class Book {
//     constructor(name, author, year) {
//         this.hasError = false; // Ініціалізація hasError
//         this.name = name; // Виклик сеттера для перевірки
//         this.author = author;
//         this.year = year;
//     }

//     printInfo() {
//         if (this.hasError) {
//             console.log("Please check your entered data");
//             return; // Зупиняємо виконання, якщо є помилка
//         }
//         console.log(`The book "${this.name}" written by ${this.author} in ${this.year} year`);
//     }

//     get name() {
//         return this._name;
//     }

//     set name(value) {
//         if (value === "") {
//             this.hasError = true; // Установлюємо помилку
//             // this._name = ""; // Зберігаємо пусту назву
//         } else {
//             this._name = value; // Встановлюємо значення
//         }
//     }

//     get author(){
//         return this._author
//     }

//     set author(value){
//         if(value === ""){
//             this.hasError = true; // Установлюємо помилку
//             // this._author = "";
//         }else {
//             this._author = value; // Встановлюємо значення
//         }
//     }
//     get year(){
//         return this._year
//     }

//     set year(value){
//         if(value <0 ){
//             this.hasError = true;
//         }else{
//             this._year = value;
//         }
//     }
// }

// export default Book;
