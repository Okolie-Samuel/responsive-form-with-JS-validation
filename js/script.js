let error1 = document.getElementById("error1");
let error2 = document.getElementById("error2");
let error3 = document.getElementById("error3");
let error4 = document.getElementById("error4");
let emailError = document.getElementById("notValid");
let emailValid =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
function validate() {
  if (myForm.fname.value.length == 0) {
    error1.innerHTML = "First Name field cannot be empty";
    document.getElementById("fname").style.border = "2px solid red";
    document.getElementById("errorImg").style.display = "initial";
  }

  if (myForm.lname.value.length == 0) {
    error2.innerHTML = "Second Name field cannot be empty";
    document.getElementById("lname").style.border = "2px solid red";
    document.getElementById("errorImg1").style.display = "initial";
  }

  if (myForm.email.value.length == 0) {
    error3.innerHTML = "Email Address field cannot be empty";
    document.getElementById("email").style.border = "2px solid red";
    document.getElementById("errorImg2").style.display = "initial";
  } else if (myForm.email.match != emailValid) {
    emailError.innerHTML = "Looks like this isn't an email";
    document.getElementById("email").style.border = "2px solid red";
    document.getElementById("errorImg2").style.display = "initial";
  }

  if (myForm.password.value.length == 0) {
    error4.innerHTML = "Password cannot be empty";
    document.getElementById("password").style.border = "2px solid red";
    document.getElementById("errorImg3").style.display = "initial";
  }
}
