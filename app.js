function showTime() {

    'use strict';

    var now = new Date(),

        hours = now.getHours(),
        minutes = now.getMinutes(),
        seconds = now.getSeconds();

    if (hours < 10) {
        hours = '0' + hours
    }
    if (minutes < 10) {
        minutes = '0' + minutes
    }
    if (seconds < 10) {
        seconds = '0' + seconds;
    }


    document.getElementById('clock').textContent = hours + ':' + minutes + ':' + seconds;

}

window.onload = function () {

    'use strict';

    setInterval(showTime, 500);
};














var age = prompt("how old are you");


if (age >= 18) {  //Annars     detta är sant
    alert("old enough");  // Öppnar sidan.  //denna raden kallas condition statement


}
else if (age < 18) { //Annars om      detta är falskt
    alert("sorry not old enough");
    open(""); //öppnar en blank sida



}
else {
    alert("Whaaaat!?"); // om du skriver med bokstäver så dyker denna upp. detta är varken sant eller falskt
    open("");
}




var name = prompt("Vad heter du?");
if (name === "motasm") {
    alert("Välkomna");
}

else {
    alert("hejdå");
    open("");
}



