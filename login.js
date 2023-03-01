document.getElementById('login-submit').addEventListener('click' ,function(){
//    get email
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;
    // get password
    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;

// Bank login part

if(userEmail === 'sontan@baap.com' && userPassword === 'secret'){
    window.location.href ="banking.html"
}
else{
    console.log('Invalid');
}

if(userEmail === 'rifayet@gmail.com' && userPassword === 'rich123'){
    window.location.href ="banking.html"
}
else{
    console.log('Invalid');
}

})

// handel deposit and withdraw