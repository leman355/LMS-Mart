var introduction=document.querySelectorAll(".marketing .marketingLeft .accordionmenu .introduction")
var introductionUl=document.querySelectorAll(".marketing .marketingLeft .accordionmenu ul")

for(let i=0; i<introduction.length; i++){
  introduction[i].addEventListener("click", function(){
        introductionUl[i].classList.toggle("ulActive")
        introduction[i].classList.toggle("activeInt")
    })
}