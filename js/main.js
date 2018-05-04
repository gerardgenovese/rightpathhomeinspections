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












// Initialize Firebase
var config = {
  apiKey: "AIzaSyCenWTjNymFHi0tc5a0w11h6oaRNe6yrYk",
  authDomain: "right-path-home-inspections.firebaseapp.com",
  databaseURL: "https://right-path-home-inspections.firebaseio.com",
  projectId: "right-path-home-inspections",
  storageBucket: "right-path-home-inspections.appspot.com",
  messagingSenderId: "987644322598"
};
firebase.initializeApp(config);

//Reference messages collection
var messagesRef = firebase.database().ref('messages');

//Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

//Submit Form
function submitForm(e) {
  e.preventDefault();
  
  //get values
  var name = getInputVal('name');
  var email = getInputVal('email');
  var phone = getInputVal('phone');
  var message = getInputVal('message');

  //Save Message
  saveMessage(name, email, phone, message);

  //Show Alert
  document.querySelector('.alert').style.display = 'block';

  //Hide Alert after 3 seconds
  setTimeout(function(){
  document.querySelector('.alert').style.display = 'none';
  }, 3000);

  //Clear Form
  document.getElementById('contactForm').reset();
}

//Function to get get form values
function getInputVal(id) {
  return document.getElementById(id).value;
}

//Save message to firebase
function saveMessage(name, email, phone, message) {
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
      name: name,
      email: email,
      phone: phone,
      message: message
  });
}