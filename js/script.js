// get the modal
var signUp = document.getElementById('sign-up');

// get the button that opens the modal
var signUpBtn = document.getElementById('sign-up-btn');

// get the <span> element that closes the modal
var span = document.getElementsByClassName('close')[0];

// when the user clicks on the button, open the model
signUpBtn.addEventListener('click', function(){
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