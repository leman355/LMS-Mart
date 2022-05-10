"use strict";

let a = document.querySelectorAll(".expLore .topText ul li a");
let botBig = document.querySelectorAll(".expLore .botBig");

for (let i = 0; i < a.length; i++) {
  a[i].onclick = function () {
    for (let j = 0; j < botBig.length; j++) {
      botBig[j].classList.remove("bigActive");
      a[j].classList.remove("active");
    }
    botBig[i].classList.add("bigActive");
    a[i].classList.add("active");
  };
}

let boxVideo = document.querySelector(".overview .videoPlay");
let playIcon = document.querySelector(
  ".overview .allView .rightView .videoBox .videoImg i"
);
let closeIcon = document.querySelector(".overview .videoPlay i");

playIcon.addEventListener("click", function () {
  boxVideo.classList.add("activeVideoPlay");
});
closeIcon.addEventListener("click", function () {
  boxVideo.classList.remove("activeVideoPlay");
});

let tabBtn = document.querySelectorAll(
  ".overview .allView .leftView .tabCont ul li"
);
let tabBody = document.querySelectorAll(
  " .overview .allView .leftView .tabBottom .tabBox"
);

for (let i = 0; i < tabBtn.length; i++) {
  tabBtn[i].onclick = function () {
    for (let j = 0; j < tabBody.length; j++) {
      tabBody[j].classList.remove("active");
    tabBtn[j].classList.remove("actiVeLi")
    }
    tabBtn[i].classList.add("actiVeLi")
    var btni = this.getAttribute("data-li");
    tabBody[btni].classList.add("active");
  };
}

var acc = document.querySelectorAll(".tabBox .accordion h5");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");

    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

function myFunction(x) {
  x.classList.toggle("fa-angle-up");
}