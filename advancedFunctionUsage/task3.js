function divide(numerator, denominator){
    if(typeof numerator !== "number" || typeof denominator !== "number"){
        throw new Error("Both values should be  numbers")
    }
    if(denominator === 0){
        throw new Error("Division by zero is not allowed")
    }
    return numerator/denominator
}

try{
    console.log(divide(10,2))
}catch (Error){
    console.log(Error.message)
}finally {
    console.log("Work completed")
}
try{
    console.log(divide(10,0))
}catch (Error){
    console.log(Error.message)
}finally {
    console.log("Work completed")
}
try{
    console.log(divide("hi",2))
}catch (Error){
    console.log(Error.message)
}finally {
    console.log("Work completed")
}