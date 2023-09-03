


function redfunction()
{
    
    email = document.getElementById('email').value
    password = document.getElementById('pwd').value


    if (email.length == 0 && password.length <= 4)
    {
        document.getElementById("emailtext").innerHTML = 'Please enter a valid email address or phone number.';
        document.getElementById("pwdtext").innerHTML = 'Your password must contain between 4 and 60 characters.';

        document.getElementById("email").style.borderColor = 'black black #e87c03 black';
        document.getElementById("pwd").style.borderColor = 'black black #e87c03 black';
    }
    else
    {
        window.location.href='login.html';

    }


