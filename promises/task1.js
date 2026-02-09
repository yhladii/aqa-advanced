function greeting(text,delay){
    setTimeout(() => {
        console.log(text);
    }, delay)
}
greeting("Hi all", 3000)