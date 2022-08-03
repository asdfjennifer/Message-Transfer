let input = document.getElementById("message");
// let outputError = document.getElementById("output-error");

document.getElementById('errorOutput').style.display = 'none';

function submitInput() {

    if (input.value) {
        console.log("funzt");
        document.getElementById("result").innerHTML = input.value;
    } else {
        console.log("keine Nachricht erhalten");
        document.getElementById('errorOutput').style.display = 'block';
    }
    // document.getElementById("message").value.innerHTML =
    //console.log(input.value);
    //outputError.innerHTML = "Test";
    //outputMessage.innerHTML = "Test";

    // if (input.value) {
    //     outputMessage.innerHTML = "";
    //     console.log("keine Nachricht erhalten");
    //     outputMessage.innerHTML = input.value;
    // } else {
    //     console.log("keine Nachricht erhalten");
    //     outputMessage.innerHTML = "Bitte gib eine Nachricht ein";
    // }

    // if (input.value <= 0) {
    //     console.log("keine Nachricht erhalten");
    // } else {
    //     console.log("Nachricht erhalten");
    // }
}

