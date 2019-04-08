function insertAfter(newElement,targetElement) {
    // target is what you want it to go after. Look for this elements parent.
    var parent = targetElement.parentNode;

    // if the parents lastchild is the targetElement...
    if (parent.lastChild == targetElement) {
        // add the newElement after the target element.
        parent.appendChild(newElement);
    } else {
        // else the target has siblings, insert the new element between the target and it's next sibling.
        parent.insertBefore(newElement, targetElement.nextSibling);
    }
}

function cambiarCampeon(e){
    var id = e.id;

    switch (id) {
        case "C1":
            document.getElementById("S1").src = "img/Tristana_0.jpg";
            document.getElementById("S2").src = "img/Tristana_1.jpg";
            if (document.getElementById("S3") == undefined){
                var imgNueva = document.createElement("img");
                imgNueva.id = "S3";
                imgNueva.className = "SkinCampeones";
                insertAfter(imgNueva, document.getElementById("S2"));
            }
            document.getElementById("S3").src = "img/Tristana_2.jpg";
            
            break;
        case "C5":
            document.getElementById("S1").src = "img/Tryndamere_0.jpg";
            document.getElementById("S2").src = "img/Tryndamere_1.jpg";
            document.getElementById("S3").remove();
            break;
    }
}

function cambiarIMGTexto(e){
    var id = e.id;
    var src = document.getElementById(id).getAttribute("src");

    document.getElementById("IMGmostrada").src = src;

    switch (id) {
        case "S1":
            document.getElementById("parrafo").innerText = "tristana";
            break;
        case "S2":
            document.getElementById("parrafo").innerText = "tristana 2";
            break;
        case "S3":
            document.getElementById("parrafo").innerText = "tristana 3";
            break;
        default:
            break;
    }
}