function openPopUp(window) {
    if(document.getElementById("DivIdPopUpBox").innerHTML==""||document.getElementById("DivId"+window)==null) {
        request("DivIdPopUpBox", "View/Frames/Common/Common/Window/Common/PopUp/" + window + ".php", "GET");
    }
    popUpOpen("DivIdPopUpBox");
}

function cleanOpenPopUp(window) {
    var file="View/Frames/Common/Common/Window/Common/PopUp/" + window + ".php";
    request("DivIdPopUpBox", file, "GET");
    popUpOpen("DivIdPopUpBox");
}

function popUpClose(window) {
    fadeOutDivId(window,0.5);
}

function popUpOpen(window) {
    fadeInDivId(window,0.5);
}