// get the modal
var signUp = document.getElementById('sign-up');

// get the button that opens the modal
var signUpBtn = document.getElementById('sign-up-btn');

// get the mobile button that opens the modal
var mobileSignUpBtn = document.getElementById('mobile-sign-up-btn');

// get the <span> element that closes the modal
var span = document.getElementsByClassName('close')[0];

// when the user clicks on the button, open the model
signUpBtn.addEventListener('click', function(){
    signUp.style.display = "block";
});

// when the user clicks on the mobile sign up button, open the modal
mobileSignUpBtn.addEventListener('click', function(){
    signUp.style.display = "block";
});

// when the user clicks on <span>(x), close the modal
span.addEventListener('click', function(){
    signUp.style.display = "none";
});

// when the user clicks anywhere outside the modal, close it
window.addEventListener('click', function(event){
    if (event.target == signUp){
        signUp.style.display = "none";
    }
    
});

// get the sign-in modal
var signIn = document.getElementById('sign-in');

// get the sign-in button
var signInBtn = document.getElementById('sign-in-btn');

// get the mobile button that opens the modal
var mobileSignInBtn = document.getElementById('mobile-sign-in-btn');

// get the <span> element that closes the modal
var span = document.getElementsByClassName('close')[1];

// when the user clicks on the button, open the model
signInBtn.addEventListener('click', function(){
    signIn.style.display = "block";
});

// when the user clicks on the mobile sign up button, open the modal
mobileSignInBtn.addEventListener('click', function(){
    signIn.style.display = "block";
});

// when the user clicks on <span>(x), close the modal
span.addEventListener('click', function(){
    signIn.style.display = "none";
});

// when the user clicks anywhere outside the modal, close it
window.addEventListener('click', function(event){
    if (event.target == signIn){
        signIn.style.display = "none";
    }
});

const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.main-menu');
const menuItems = document.querySelectorAll('.main-menu li');

hamburger.addEventListener('click', function(){
    menu.classList.toggle('nav-active');

    menuItems.forEach(function(link, index){
        if (link.style.animation){
            link.style.animation = '';
        }
        else{
            link.style.animation = `menuItemFade 0.3s ease forwards ${index / 7 + 0.5}s`;
        }
    });

    hamburger.classList.toggle('toggle');
});