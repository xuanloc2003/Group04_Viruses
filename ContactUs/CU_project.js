function checkEmpty(value) {
    if (value.trim() == "") {
        return true;
    }
    return false;
}
function check() {
    var firstname = document.getElementById("fname");
    if (checkEmpty(firstname.value)) {
        alert("First Name can't left blank!");
        firstname.focus();
        return false;
    }

    var lastname = document.getElementById("lname");
    if (checkEmpty(lastname.value)) {
        alert("Last Name can't left blank!");
        lastname.focus();
        return false;
    }
    var address = document.getElementById("address");
    if (checkEmpty(address.value)) {
        alert("Address can't left blank!");
        address.focus();
        return false;
    }
    var email = document.getElementById("email");
    if (checkEmpty(email.value)) {
        alert("Email can't left blank!");
        email.focus();
        return false;
    }
    var phone = document.getElementById("phone");
    if (checkEmpty(phone.value)) {
        alert("Phone number can't left blank!");
        phone.focus();
        return false;
    }
    var regmail = /^\w+[@]\w+[.]\w{3}([.]\w{2})?$/;
    if (!regmail.test(email.value.trim())) {
        email.style.border = "2px solid red";
        alert("Email is not invalid");
        email.focus();
        return false;
    }
    var regPhone = /^[0-9]+$/;
    if (!regPhone.test(phone.value.trim())) {
        alert("Phone number is invalid");
        phone.focus();
        return false;
    }
    alert("Your Contact Information has been recorded! Please wait for our response! We really appreciate that and look forward to work with you!");
}