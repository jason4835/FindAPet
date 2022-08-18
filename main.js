const database = firebase.database();

//test
let email = "test@gmail.com";
let password = "1234";

//Login Page

const loginForm = document.getElementById("login-form");
const loginEmail = document.getElementById("login-email");
const loginPassword = document.getElementById("login-password");
const loginBtn = document.getElementById("login-btn");
const feedContainer = document.getElementById("feed-container");

const loginBtnClick = (event) => {
    event.preventDefault();

    if (email === loginEmail.value && password === loginPassword.value) {
        loginForm.style.display = "none";
        feedContainer.style.display = "block";
    } else {
        alert("Password and/or Email are incorrect");
    }
};

loginBtn.onclick = loginBtnClick;

//Sign Up Page

const signUpForm = document.getElementById("signup-form");
const signUpEmail = document.getElementById("sign-up-email");
const signUpUsername = document.getElementById("sign-up-username");
const signUpPhoneNumber = document.getElementById("sign-up-phone-number");
const signUpFirstName = document.getElementById("sign-up-first-name");
const signUpLastName = document.getElementById("sign-up-last-name");
const signUpPassword = document.getElementById("sign-up-password");
const signUpPasswordConfirm = document.getElementById("sign-up-password-confirm");
const signUpBtn = document.getElementById("signup-btn");

const checkPassword = (event) => {
    event.preventDefault();
    if (signUpPassword === signUpPasswordConfirm) {
        updateDB();
        alert("Account Created");
    } else {
        alert("Password does not match up");
    };
};

//updating DataBase
const updateDB = (event) => {
    event.preventDefault();

    let data = {
        EMAIL: signUpEmail.value,
        PASSWORD: signUpPassword.value,
        FIRSTNAME: signUpFirstName.value, 
        LASTNAME: signUpLastName.value,
        PHONENUMBER: signUpPhoneNumber.value
    };

    //TEMPORARY: check whats getting printed out
    console.log(data);

    //sends to database
    database.ref().push(data);
};

signUpBtn.onclick = checkPassword;