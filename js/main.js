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


var hamburgerButton = document.querySelector('.hamburger__button');
var mobileNav = document.querySelector('.mobile');

function openMobile() {
    mobileNav.classList.add('open');
    mobileNav.style.opacity = '1';
}

function closeMobile() {
    mobileNav.classList.remove('open');

    setTimeout(function(){
      mobileNav.style.opacity = '0';
    }, 500);
   
}

hamburgerButton.addEventListener('click', openClose)

function openClose() {
  if (mobileNav.classList.contains('open')) {
    closeMobile();
  }else {
    openMobile();
  }
}


mobileNav.addEventListener('click', closeMobile);