import Book from "./Book.js"

class EBook extends Book{
     constructor(name, author, year, format){
        super (name, author, year)
        this._format = format
    }
     printInfo(){
                if (Object.keys(this.errors).length > 0) {
            console.log("Please check your entered data:");
            console.log(this.errors);
            return;
        }
    console.log(`The book "${this.name}" written by ${this.author} in ${this.year} year. Available in ${this.format} format`);
    }
    
    set format(value){
        if(typeof value !== "string"){
            this.errors.format = "Please enter valid format"
        }else{
            this._format = value
            delete this.errors.format
        }
    }
    get format(){
        return this._format
    }
static fromBook(book1,format){
    return new EBook(book1.name, book1.author, book1.year, format)
}
}
export default EBook