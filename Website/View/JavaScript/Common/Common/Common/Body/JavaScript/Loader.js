function loadFile(fileName, fileType, dataMain, id){
    if (fileType=="js"){ //if filename is a external JavaScript file
        var fileref=document.createElement('script');
        fileref.setAttribute("type","text/javascript");
        fileref.setAttribute("id", id);
        fileref.setAttribute("src", fileName);
        fileref.setAttribute("data-main", dataMain);
    } else if (fileType=="css"){ //if filename is an external CSS file
        var fileref=document.createElement("link");
        fileref.setAttribute("id", id);
        fileref.setAttribute("rel", "stylesheet");
        fileref.setAttribute("type", "text/css");
        fileref.setAttribute("href", fileName);
    }
    if (typeof fileref!="undefined") {
        document.getElementsByTagName("head")[0].appendChild(fileref);
    }
}