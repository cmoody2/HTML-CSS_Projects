function validateForm() {
    var a = document.forms["contactForm"]["name"].value;
    var b = document.forms["contactForm"]["email"].value;
    var c = document.forms["contactForm"]["phoneNumber"].value;
    if (a == "") {
        alert("please fill out name");
        return false;
    }
    if (b == "") {
        alert("please fill out email");
        return false;
    }
    if (c == "") {
        alert("please fill out phone number");
        return false;
    }
}