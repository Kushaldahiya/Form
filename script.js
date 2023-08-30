container = document.querySelector(".container"),
pwShowHide = document.querySelectorAll(".showidepw"),
pwField = document.querySelectorAll(".password"),
singUp = document.querySelector(".singup-link"),
login = document.querySelector(".login-link");

pwShowHide.forEach(eyeIcon => {
    eyeIcon.addEventListener("click", ()=>{
        pwField.forEach(pwField=>{
            if(pwField.type === "password"){
                pwField.type = "text";
                pwShowHide.forEach(icon=>{
                    icon.classList.replace("fa-eye-slash","fa-eye");
                })
            }else{
                pwField.type = "password";

                pwShowHide.forEach(icon =>{
                    icon.classList.replace("fa-eye","fa-eye-slash");
                })
            }
        })
    })
});


singUp.addEventListener("click", function(){
    container.classList.add("active");
});

login.addEventListener("click", function(){
    container.classList.add("active");
});


function loginvalidation() {
    let email = document.forms.loginForm.email.value;
    let password = document.forms.loginForm.password.value;
    let regEmail = /^[a-zA-Z0-9.!#$%'8+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/;
    
    if (email === "" || !regEmail.test(email)) {
        alert("Please enter a valid email address.");
        document.forms.loginForm.email.focus();
        return false;
    }
    
    if (password === "") {
        alert("Please enter your password.");
        document.forms.loginForm.password.focus();
        return false;
    } else {
        alert("Login Successful.");
    }
}



function signUpValidation() {
    let name = document.forms.singUpform.name.value;
    let email = document.forms.singUpform.email.value;
    let password = document.forms.singUpform.password.value;
    let confirmpwd = document.forms.singUpform.confirmpwd.value;

    let regEmail = /^[a-zA-Z0-9.!#$%8+/?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/; 
    let regName = /\d+/g; 

    if (name === "" || regName.test(name)) {
        alert("Please enter your name properly.");
        document.forms.singUpform.name.focus();
        return false;
    }
    if (email === "" || !regEmail.test(email)) { 
        alert("Please enter a valid email address.");
        document.forms.singUpform.email.focus();
        return false;
    }
    if (password === "" || password.length < 6) { 
        alert("Please enter a valid password (at least 6 characters).");
        document.forms.singUpform.password.focus();
        return false;
    }
    if (confirmpwd === "" || confirmpwd !== password) { 
        alert("Please confirm your password correctly.");
        document.forms.singUpform.confirmpwd.focus();
        return false;
    }else{
        alert("Registered Succesfully.");
    }
    
    
}
