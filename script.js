
let button = document.getElementById("button");
let hiddenText = document.getElementById("hiddenText");

button.addEventListener("click", function buttonClick(){
    hiddenText.innerHTML += "FIRE!";
});