/*var amountToIncreace = 1;
function Increase() {
let myCurrentnumber = Number(document.getElementById("currentNumber").innerHTML);
myCurrentnumber = myCurrentnumber + amountToIncreace;
document.getElementById("currentNumber").innerHTML = myCurrentnumber;
}
function Decrease() {
let myCurrentnumber = Number(document.getElementById("currentNumber").innerHTML);
myCurrentnumber = myCurrentnumber - amountToIncreace;
document.getElementById("currentNumber").innerHTML = myCurrentnumber;
}
*/
var flagAllowed = true

function ChangeNumber(amountToChange) {
    if (flagAllowed) {
        let myCurrentnumber = Number(document.getElementById("currentNumber").innerHTML);
        myCurrentnumber = myCurrentnumber + amountToChange;
        document.getElementById("currentNumber").innerHTML = myCurrentnumber;
        //flagAllowed = false;
    }
    
}
function changeFlag() {
    flagAllowed = !flagAllowed; // NEGATION

    let myFlag = document.getElementById("flag");
    if (flagAllowed) 
    {
        myFlag.classList.remove("redFlag");
        myFlag.classList.add("greenFlag");
        //myFlag.style.backgroundColor = "green";
    } 
    else 
    {
        myFlag.classList.remove("greenFlag");
        myFlag.classList.add("redFlag");
        //myFlag.style.backgroundColor = "red";
    }

}
    