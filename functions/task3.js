function checkOrder(available, ordered) {
  if (available < ordered) {
    console.log("Your order is too large, we don’t have enough goods.");
    return;
  }
  if (ordered === 0) {
    console.log("Your order is empty.");
    return;
  }
  console.log("Your order is accepted");
}

checkOrder(7, 10);
checkOrder(7, 0);
checkOrder(7, 4);
