// document.querySelector(".w").addEventListener("click",function (){
//     alert("I got clicked");
// });

let drums = document.querySelectorAll(`.drum`);

drums.forEach((a) => {
  a.addEventListener(`click`, function () {
    // this.style.color = 'white';

    if (a.style.color === "white") {
      a.style.color = "red";
    } else {
      a.style.color = "white";
    }
  });
});

drums[0].addEventListener("click", function () {
  let newsound1 = new Audio("./sounds/crash.mp3");
  newsound1.play();
  console.log("Hrllo");
});
drums[1].addEventListener("click", function () {
  let newsound2 = new Audio("./sounds/kick-bass.mp3");
  newsound2.play();
});
drums[2].addEventListener("click", function () {
  let newsound3 = new Audio("./sounds/snare.mp3");
  newsound3.play();
});
drums[3].addEventListener("click", function () {
  let newsound4 = new Audio("./sounds/tom-1.mp3");
  newsound4.play();
});
drums[4].addEventListener("click", function () {
  let newsound5 = new Audio("./sounds/tom-2.mp3");
  newsound5.play();
});
drums[5].addEventListener("click", function () {
  let newsound6 = new Audio("./sounds/tom-3.mp3");
  newsound6.play();
});
drums[6].addEventListener("click", function () {
  let newsound7 = new Audio("./sounds/tom-4.mp3");
  newsound7.play();
});

document.addEventListener("keypress", function (event) {
  let ttkey = event.key;
  switch (ttkey) {
    case "w":
      let newsound1 = new Audio("./sounds/crash.mp3");
      newsound1.play();
      break;
    case "a":
      let newsound2 = new Audio("./sounds/kick-bass.mp3");
      newsound2.play();
      break;
    case "s":
      let newsound3 = new Audio("./sounds/snare.mp3");
      newsound3.play();
      break;
    case "h":
      let newsound4 = new Audio("./sounds/tom-1.mp3");
      newsound4.play();
      break;
    case "j":
      let newsound5 = new Audio("./sounds/tom-2.mp3");
      newsound5.play();
      break;
    case "k":
      let newsound6 = new Audio("./sounds/tom-3.mp3");
      newsound6.play();
      break;
    case "l":
      let newsound7 = new Audio("./sounds/tom-4.mp3");
      newsound7.play();
      break;
    default:
      console.log("Not Valid");
      break;
  }
});
