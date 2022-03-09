let button = document.getElementById("button");
let adviceNumber = document.getElementById("number");
let adviceText = document.querySelector("h3");

function handleAdvice(){
    fetch("https://api.adviceslip.com/advice")
    .then(result => result.json())
    .then((data) => {
        let advice = data;
        
        adviceNumber.innerHTML = `${advice.slip.id}`;
        adviceText.innerHTML = `"${advice.slip.advice}"`;

        console.log(advice)
        console.log(data)
    })
}



document.addEventListener("DOMContentLoaded", handleAdvice())
button.addEventListener("click", () => { window.location.reload() })