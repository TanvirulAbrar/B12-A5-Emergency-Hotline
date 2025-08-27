function addHeart() {
  //total-heart; total-coins; total-copy;
  const heart = document.getElementById("total-heart");
  const total = Number(heart.innerText) + 1;
  heart.innerText = "" + total;
}
function addCoin() {
  //total-heart; total-coins; total-copy;
  const heart = document.getElementById("total-coins");
  const total = Number(heart.innerText);
  if (total > 19) {
    total -= 20;
  } else {
    alert("set massage");
  }
  heart.innerText = "" + total;
}
function addCopy() {
  //total-heart; total-coins; total-copy;
  const heart = document.getElementById("total-copy");
  const total = Number(heart.innerText) + 1;
  heart.innerText = "" + total;
}
