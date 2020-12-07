var boxcolor = "redbox";
function changeBox()
{
    if(boxcolor == "redbox") {
       boxcolor = "bluebox";
        // NO
    }else {
        boxcolor = ("redbox");
    }
    myNewdiv = "<div class='boxsize " + boxcolor + "'></div>";
    document.getElementById("resultingbox").innerHTML = myNewdiv;
}