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
    let title = btn.parentNode.parentNode.childNodes[3].innerText;
    let num = btn.parentNode.parentNode.childNodes[7].innerText;
    if (total > 19) {
      total -= Number(20);
      alert("calling " + title + " " + num);
      heart.innerText = "" + total;
      const time = new Date().toLocaleTimeString();
      addChild(title, time, num);
    } else {
      alert("coin is less than 20");
    }
  });
}
function addChild(title, time, num) {
  let parent = document.getElementById("parent");
  let child = document.createElement("div");
  child.innerHTML = `<div class="flex justify-between bg-gray-100 rounded-[16px] p-4 items-center">
            <div class="">
              <h1 id="title" class="font-[600] text-[18px]">National Emergency Number</h1>
              <p id="num" class="">1994-999999</p>
            </div>
            <p id="time" class="font-semibold">11:36:58 AM</p>
          </div>`;
  child.querySelector("#title").innerText = title;
  child.querySelector("#num").innerText = num;
  child.querySelector("#time").innerText = time;
  parent.appendChild(child);
}

const copyBtn = document.getElementsByClassName("copyButton");
for (let btn of copyBtn) {
  btn.addEventListener("click", function (e) {
    //total-heart; total-coins; total-copy;
    const heart = document.getElementById("total-copy");
    let total = Number(heart.innerText) + 1;
    heart.innerText = "" + total;
    let num = btn.parentNode.parentNode.childNodes[7].innerText;
    navigator.clipboard
      .writeText(num)
      .then(() => {
        console.log("Copied:", num);
      })
      .catch((err) => {
        console.error("Failed to copy:", err);
      });
  });
}
function clearHistory() {
  let parent = document.getElementById("parent");
  parent.innerHTML = "";
}
