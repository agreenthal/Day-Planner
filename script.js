$(document).ready(function(){
    
document.getElementById("Confirm").addEventListener("click", save());

function save() {
    prompt(document.getElementById("questionOne").value);
}

<input type="button" id="confirm" value="Confirm"></input>
});


function date(){
    let currentTime = new Date();
    let currentHour = currentTime.getHours();
    currentTime.toLocaleString();
}



