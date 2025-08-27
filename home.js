function addHeart() {
  //total-heart; total-coins; total-copy;
  const heart = document.getElementById("total-heart");
  const total = Number(heart.innerText) + 1;
  heart.innerText = "" + total;
}

const buttonBtn = document.getElementsByClassName("callButton");
for (let btn of buttonBtn) {
  btn.addEventListener("click", function (e) {
    const heart = document.getElementById("total-coins");
    let total = Number(heart.innerText);
    if (total > 19) {
      total -= Number(20);
      alert("colling");
    } else {
      alert("set massage");
    }
    heart.innerText = "" + total;
    let title = btn.parentNode.parentNode.childNodes[3].innerText;
    let num = btn.parentNode.parentNode.childNodes[7].innerText;
    const time = new Date().toLocaleTimeString;
  });
}

function addCopy() {
  //total-heart; total-coins; total-copy;
  const heart = document.getElementById("total-copy");
  let total = Number(heart.innerText) + 1;
  heart.innerText = "" + total;
}
function clearHistory() {
  let parent = document.getElementById("parent");
  for (let i of parent.childNodes) {
    parent.remove(i);
  }
}
