//ALLOW DIV ELEMENT TO MAINTAIN BUTTON HOVER COLOR
// function hover() {


//   let header = document.querySelector(".side-nav");
//   let btns = header.getElementsByClassName("side-nav__link");
//   for (let i = 0; i < btns.length; i++) {
//     btns[i].addEventListener("click", function() {
//       let current = document.getElementsByClassName("active");
//       current[0].className = current[0].className.replace(" active", "");
//       this.className += " active";
//     });
//   }
// };
// hover();



$('.carousel').carousel({
  interval: 10000
})