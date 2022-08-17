const database = firebase.database().ref();

//Login Page

const loginForm = document.getElementById("login-form");
const loginEmail = document.getElementById("login-email");
const loginPassword = document.getElementById("login-password")
const loginBtn = document.getElementById("login-btn")

//Sign Up Page

const signUpForm = document.getElementById("signup-form");
const signUpEmail = document.getElementById("sign-up-email");
const signUpUsername = document.getElementById("sign-up-username");
const signUpPhoneNumber = document.getElementById("sign-up-phone-number");
const signUpFirstName = document.getElementById("sign-up-first-name");
const signUpLastName = document.getElementById("sign-up-last-name");
const signUpBtn = document.getElementById("signup-btn");