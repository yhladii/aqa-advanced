// function declaration

function getRectangleAreaDecl(width, height){
    return width * height
}

console.log('Function declaration.Rectangle Area:' ,getRectangleAreaDecl(5,10));

//function expression

const rectangleAreaExpr = function(width, height){
    return  width * height
}
console.log('Function expression.Rectangle Area:' ,rectangleAreaExpr(5,10));

//arrow function

const rectangleAreaArr = (width, height) => width * height
console.log('Arrow function.Rectangle Area:' ,rectangleAreaArr(5,10));