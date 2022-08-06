const box = document.getElementsByClassName("shape-box")[0];
const changeButton = document.getElementById("change-btn");
const inputBox = document.getElementById("input-txt");
const toggleButton = document.getElementById("toggle");
const toggler = document.getElementsByClassName("indicator")[0];
const krsnaImg = document.getElementById("krsna-img");
const body = document.querySelector("body");
const heading = document.querySelector("h1");
const welcome = document.getElementById("welcome");
const thankYou = document.getElementById("thank-you");
const smile = document.getElementById("smile");

const one = document.querySelector(".one");
const two = document.querySelector(".two");

let txt,
  iter = 0,
  flag = false;

const toggleBtnStyle = function () {
  console.log(iter);
  if (flag == true) {
    if (iter & 1) {
      toggler.style.left = "35px";
      toggleButton.style.background =
        "linear-gradient(to top right, #2ebf85 0%, #363682 100%)";
      document.styleSheets[0].addRule("body::before", "opacity: 1;");
      box.style.background =
        "linear-gradient(to top left,#bf2e34  0%,#753682  100%)";
      box.style.transform = "translate(0px, 100px) rotate(180deg)";
      one.style.opacity = "1";
      two.style.opacity = "1";
      smile.style.opacity = "1";
      thankYou.style.fontSize = "50px";
      welcome.style.fontSize = "0px";
    } else {
      toggler.style.left = "0px";
      toggleButton.style.background =
        "linear-gradient(to top left, #753682 0%, #bf2e34 100%)";
      box.style.background =
        "linear-gradient(to top right, #2ebf85 0%, #363682 100%)";
      document.styleSheets[0].addRule("body::before", "opacity: 0;");
      box.style.transform = "translate(0px, 0px)";
      one.style.opacity = "0";
      two.style.opacity = "0";
      smile.style.opacity = "0";
      thankYou.style.fontSize = "0px";
      welcome.style.fontSize = "50px";
    }
  }
};

const boxStyles = function () {
  box.style.transitionDuration = "1s";
  one.style.transitionDuration = "1s";
  two.style.transitionDuration = "1s";
  flag = true;
  let num = Number(txt);

  let sum = 0;
  let max = -1;
  while (num > 0) {
    const rem = num % 10;
    sum += rem;
    if (rem > max) max = rem;
    num /= 10;
  }

  const avg = sum / 5;
  console.log(sum, avg);
  box.style.height = sum + "px";
  box.style.width = sum + "px";
  box.style.borderRadius = avg + "px";
  box.style.display = "block";

  one.style.height = sum * 1.5 + "px";
  one.style.width = sum * 1.5 + "px";
  one.style.borderRadius = "50%";

  two.style.height = sum * 1.5 + "px";
  two.style.width = sum * 1.5 + "px";
  two.style.borderRadius = "50%";

  smile.style.height = sum + "px";
  smile.style.width = sum * 2 + 20 + "px";
};

changeButton.addEventListener("click", () => {
  console.log("Hare Krishna");
  txt = inputBox.value;
  console.log(txt);
  if (txt.trim() == "" || txt.length != 5 || isNaN(Number(txt))) {
    alert("Please enter correct value");
    return;
  }
  boxStyles();
});

toggleButton.addEventListener("click", () => {
  console.log("togglllleee");
  ++iter;
  toggleBtnStyle(iter);
});
