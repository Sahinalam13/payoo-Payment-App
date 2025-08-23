// login button functionality
document.getElementById("loginButton")
.addEventListener('click', function(e){
    e.preventDefault();
    const mobileNumber = 15756843500;
    const pinNumber = 1234;
    const mobileNumberValue = document.getElementById("mobile-number").value;
    const mobileNumberValueConverter = parseInt(mobileNumberValue);

    const pinNumberValue = document.getElementById("pin-number").value;
    const pinNumberValueConverter = parseInt(pinNumberValue);

    if(mobileNumberValueConverter === mobileNumber && pinNumberValueConverter === pinNumber){
        window.location.href="./home.html"
    }
    else{
        alert("Invalid Credentials");
    }
})