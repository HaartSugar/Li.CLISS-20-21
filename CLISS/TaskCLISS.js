/*

Create an HTML page with two inputs, one select box and one button.

When the user clicks on the button, we need to display on the HTML page a "matrix" (a grid) of boxes with 
background colors.

We need to display as many rows as specified by the first input box.
The number of columns in the grid is given by the second input box.
The background color of the boxes should be specified by the select -> choose between three different possible 
colors.

To make this easier, I will provide the HTML code.


*/


function CreateGrid() {
    let nombreofRows = document.getElementById("Rows").value;
    NombreofRows = Number(nombreofRows);

    let nombreofColums = document.getElementById("Cols").value;
    NombreofColumes = Number(nombreofColums);

    let boxColor = document.getElementById("boxColor").value;
    boxColor = Number(boxColor);
    
    let outputResult = '';
    for (let rowsIndex = 0; rowsIndex < NombreofRows; rowsIndex++) {
        outputResult += "<div>"
        for(let i=0;i<NombreofColumes;i++)
        {
            let colorOfBox = "";
            if (boxColor == 1)
            {
                colorOfBox = "redBox";
            }
            if (boxColor == 2)
            {
                colorOfBox = "blueBox";
            }
            if (boxColor == 3)
            {
                colorOfBox = "yellowBox";
            }

            outputResult += '<div class ="box ' + colorOfBox + '"></div>';
        }
        outputResult += "</div>";
    }
    document.getElementById("Result").innerHTML = outputResult;
}