function handleNum(num, callBackEv, callBackOdd) {
  if (num % 2 === 0) {
    callBackEv();
  } else {
    callBackOdd();
  }
}
function handleEven() {
  console.log("number is even");
}

function handleOdd() {
  console.log("number is odd");
}

handleNum(5, handleEven, handleOdd);
