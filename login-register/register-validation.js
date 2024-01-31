const myInput = document.getElementById("psw");
const letter = document.getElementById("letter");
const number = document.getElementById("number");
const length = document.getElementById("length");

myInput.onkeyup = function() {

    let lowerCase = /[a-z]/g;
    let upperCase = /[A-Z]/g;

    if (myInput.value.match(lowerCase) || myInput.value.match(upperCase)) {
        letter.classList.remove("invalid");
        letter.classList.add("valid");
    }
    else {
        letter.classList.remove("valid");
        letter.classList.add("invalid");
    }

    let numbers = /[0-9]/g;
    const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

    if(myInput.value.match(numbers) || myInput.value.match(specialChars)) {
        number.classList.remove("invalid");
        number.classList.add("valid");
    } else {
        number.classList.remove("valid");
        number.classList.add("invalid");
    }

    // Validate length
    if(myInput.value.length >= 8) {
        length.classList.remove("invalid");
        length.classList.add("valid");
    } else {
        length.classList.remove("valid");
        length.classList.add("invalid");
    }
}