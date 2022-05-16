// console.log("ey");

let input = document.getElementById("message");
let outputError = document.getElementById("output-error");
let outputMessage = document.getElementById("output-message");

function submit() {
    console.log("funzt");
    // document.getElementById("message").value.innerHTML =
    console.log(input.value);
    outputError.innerHTML = "Test";
    outputMessage.innerHTML = "Test";
}

    if (input.value) {
        outputMessage.innerHTML = "";
        console.log("keine Nachricht erhalten");
        outputMessage.innerHTML = input.value;
    } else {
        console.log("keine Nachricht erhalten");
        outputMessage.innerHTML = "Bitte gib eine Nachricht ein";
    }

    if (inputLength <= 0) {
        console.log("keine Nachricht erhalten");
    } else {
        console.log("Nachricht erhalten");
    }