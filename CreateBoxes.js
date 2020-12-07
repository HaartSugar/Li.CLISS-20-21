/*
var count = 0;
var currentBoxcolor = "boxColor1";
function CreateBoxes() {
    let str = document.getElementById("Times").value;
    let numberofboxes = Number(str);
    for (let i = 0; i < numberofboxes; i++) {


        count++
        let addBox = '<div class="box ' + currentBoxcolor + '">' + count + '</div>';
        if (currentBoxcolor == "boxColor1") {
            currentBoxcolor = "boxColor2";
        }
        else
            if (currentBoxcolor == "boxColor2") {
                currentBoxcolor = "boxColor3";
            }
            else
                if (currentBoxcolor == "boxColor3") {
                    currentBoxcolor = "boxColor1";
                }
        document.getElementById("Boxes").innerHTML += addBox;
    }
}


function DoCompute() {
    let a = 0;
    let b = 1;
    let c = a+b;

    for (let i = 0; a < 1000000; i++) {
        a = b;
        b = c;
        c = a+b;
        document.getElementById("result").innerHTML += a + "<BR>";
        document.getElementById("result").innerHTML += i + ",";       
        
    }
}
*/
var citys = ["Lux city","Wiltz","Esch"];

function ShowCities() {
    document.getElementById("Cities").innerHTML = "";
    for (let i = 0; i < citys.length;i++ ){
        let citynumber = i + 1;
        document.getElementById("Cities").innerHTML += citynumber + " -" + citys + "<br>";
    }
}

