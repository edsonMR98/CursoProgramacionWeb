NoDiv = 0;
idDiv = "";

function agregarDiv(){
    var newDiv = document.createElement("div");
    newDiv.innerText = NoDiv;
    newDiv.id = "div" + NoDiv;
    newDiv.style.backgroundColor = "#FF0000";
    newDiv.style.width = "100px";
    newDiv.style.height = "100px";
    newDiv.style.border = "solid black 1px";
    var container = document.getElementById("SecContainer");
    container.insertBefore(newDiv, container.childNodes[0]);
    document.getElementById("div" + NoDiv).addEventListener("click", function (e){
        if (e.srcElement)
            idDiv = e.srcElement.id;
        else if (e.target)
            idDiv = e.target.id;

        for (x = 0; x < NoDiv; x++)
            document.getElementById("div" + x).style.borderStyle = "solid";
        
        document.getElementById(idDiv).style.borderStyle = "dotted";    // cambiar el estilo del borde del div
        
        document.getElementById("IdAncho").value = document.getElementById(idDiv).style.width.slice(0, 3);  // mostrar el ancho del div en el input
        document.getElementById("IdAlto").value = document.getElementById(idDiv).style.height.slice(0, 3);  // mostrar el alto del div en el input
        document.getElementById("IdBorde").value = document.getElementById(idDiv).style.borderWidth.slice(0, 1);  // mostrar el ancho del borde del div en el input
        document.getElementById("IdColorBack").value = convertirHex(document.getElementById(idDiv).style.backgroundColor);  // mostrar el color de fondo del div en el color
        document.getElementById("IdColorBorde").value = convertirHex(document.getElementById(idDiv).style.borderColor); // mostrar el color del borde del div en el color
    });
    NoDiv++;
}

function cambiar(e){
    var id = e.id;
    var val = document.getElementById(id).value;    // Obtenemos el valor actual del elemento

    switch (id) {   // Aplicamos el val al atributo correspondiente
        case "IdColorBack":
            document.getElementById(idDiv).style.backgroundColor = val;
            break;
        case "IdAncho":
            document.getElementById(idDiv).style.width = val + "px";
            break;
        case "IdAlto":
            document.getElementById(idDiv).style.height = val + "px";
            break;
        case "IdBorde":
            document.getElementById(idDiv).style.borderWidth = val + "px";
            break;
        case "IdColorBorde":
            document.getElementById(idDiv).style.borderColor = val;
            break;
    }
}

function convertirHex(rgb){
    rgb=rgb.replace('rgb(','').replace(')','').split(',');
    r = Number(rgb[0]).toString(16);
    if (r.length < 2) r = "0" + r;
    g = Number(rgb[1]).toString(16);
    if (g.length < 2) g = "0" + g;
    b = Number(rgb[2]).toString(16);
    if (b.length < 2) b = "0" + b;

    return "#" + r + g + b;
}