const input = document.querySelector(".email");
const error = document.querySelector(".error-message");
const submit = document.querySelector(".btn-notify");

input.addEventListener("keyup", function(event) {
    if (event.key == "Enter") {
        validateEmail();
    }
});

submit.addEventListener("click", validateEmail);
submit.addEventListener("keyup", function(event) {
    if (event.key == "Enter") {
        validateEmail();
    }
});

function validateEmail() {

    if (checkAt() && checkLength() && checkDomain()) {
        if (input.classList.contains("error")) {
            removeError();
            input.placeholder = "Thank You For Subscribing!";
            input.value = '';
        }
        else {
            input.placeholder = "Thank You For Subscribing!";
            input.value = '';
        }
    }
    else {
        addError();
    }

}

function checkAt() {
    if (input.value.indexOf("@") != -1) {
        return true;
    }
    else {
        return false;
    }
}

function checkLength() {
    if (input.value.slice(0, input.value.indexOf("@")).length > 2) {
        return true;
    }
    else {
        return false;
    }
}

function checkDomain() {
    let doms = ['.com', '.net', '.co.uk', '.fr'];

    for (let i = 0; i < doms.length; i++) {
        if (input.value.indexOf(doms[i]) != -1) {
            return true;
        }
    }
    return false;
}

function addError() {
    input.classList.add("error");
    error.classList.remove("inv");
}

function removeError() {
    input.classList.remove("error");
    error.classList.add("inv");
}