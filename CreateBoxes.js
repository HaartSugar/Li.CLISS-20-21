var count = 0;
var currentBoxcolor = "boxColor1";
function CreateBoxes()
{
    count++
    let addBox = '<div class="box '+currentBoxcolor + '">'+ count + '</div>';
    if (currentBoxcolor == "boxColor1") 
    {
        currentBoxcolor = "boxColor2";
    }
    else 
    if (currentBoxcolor == "boxColor2") 
    {
        currentBoxcolor = "boxColor3";
    }
    else
    if (currentBoxcolor == "boxColor3") 
    {
        currentBoxcolor = "boxColor1";
    }
    document.getElementById("CreateBoxes").innerHTML += addBox;
}