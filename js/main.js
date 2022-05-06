let bars = document.querySelector('#header .myContainer .bars')
let barsF = document.querySelector('#header .myContainer .bars .barsF')
let iks = document.querySelector('#header .myContainer .bars .iks')

let bigmenu = document.querySelector("#header .bigMenu")
let menu = document.querySelector("#header .bigMenu menu")
let resX = document.querySelector("#header .bigMenu  .resX")

bars.addEventListener('click', function () {
    barsF.classList.add("togglebarsF")
    iks.classList.add("toggleIks")
    bigmenu.classList.add("navActive")
    menu.classList.add("menuActive")
    // setInterval(function () {
    resX.classList.toggle("resXAnim")
    //    }, 1000);
})
resX.addEventListener('click', function () {
    barsF.classList.remove("togglebarsF")
    iks.classList.remove("toggleIks")
    bigmenu.classList.remove("navActive")
    menu.classList.aremovedd("menuActive")
})

let homeLi = document.querySelectorAll("#header .bigMenu   .menu ul .homeli .homeA")
let aI = document.querySelectorAll("#header .bigMenu   .menu ul .homeli a .dDown")
let home = document.querySelectorAll("#header .bigMenu  .menu ul .homeli .home")
let courseGridA = document.querySelectorAll("#header .bigMenu  .menu ul .homeli .home .courseGrid .courseGridA")
let courseGridI = document.querySelectorAll("#header .bigMenu  .menu ul .homeli .home .courseGrid .courseGridA .rDown")
let course = document.querySelectorAll("#header .bigMenu  .menu ul .homeli .home .courseGrid .course")

for (let i = 0; i < homeLi.length; i++) {
    homeLi[i].addEventListener("click", function () {
        aI[i].classList.toggle("itransform")
        home[i].classList.toggle("relHome")
    })
}

for (let i = 0; i < courseGridA.length; i++) {
    courseGridA[i].addEventListener("click", function () {
        courseGridI[i].classList.toggle("courseI")
        course[i].classList.toggle("relCourse")
    })
}



let videoBox = document.querySelector(".why .videoBox")
let play = document.querySelectorAll('.why .this .discuss i')
let closeBox = document.querySelector(".why .videoBox i")


for (let i = 0; i < play.length; i++) {
    play[i].addEventListener("click", function () {
        videoBox.classList.add("activeVideo")
    })
    closeBox.addEventListener("click", function () {
        videoBox.classList.remove("activeVideo")
    })
}

let arrUp=document.querySelector('.arrUp')
 
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 700 || document.documentElement.scrollTop > 700) {
        arrUp.classList.add("arrUpactive")
  } else {
    arrUp.classList.remove("arrUpactive")
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


let filterLeftLi = document.querySelectorAll(
  ".filterLeft ul li"
);
let filterLeftP = document.querySelectorAll(
  ".filterLeft ul li p"
);

for (let i = 0; i < filterLeftLi.length; i++) {
  filterLeftLi[i].addEventListener("click", function () {
    filterLeftP[i].classList.toggle("toggleP");
  });
}
