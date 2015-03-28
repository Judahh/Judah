var requestDone;

function requestVariable(file,format,stringVariable) {
    var domStorage=window.localStorage || (window.globalStorage? globalStorage[location.hostname] : null);
    var cached=domStorage[file];
    var cached2=sessionStorage.getItem(file);
    requestDone=false;

    if (cached==null||cached==''||cached==undefined) {
        cached=cached2;
    }

    //alert("Cached of "+file+"=("+cached+")");

    if (cached==null||cached==''||cached==undefined) {
        var ajaxRequest;

        try {
            // Opera 8.0+, Firefox, Safari
            ajaxRequest = new XMLHttpRequest();
        } catch (e) {
            // Internet Explorer Browsers
            try {
                ajaxRequest = new ActiveXObject("Msxml2.XMLHTTP");
            } catch (e) {
                try {
                    ajaxRequest = new ActiveXObject("Microsoft.XMLHTTP");
                } catch (e) {
                    // Something went wrong
                    transferFailed(null);
                    return false;
                }
            }
        }

        ajaxRequest.addEventListener("progress", updateProgress, false);
        ajaxRequest.addEventListener("load", transferComplete, false);
        ajaxRequest.addEventListener("error", transferFailed, false);
        ajaxRequest.addEventListener("abort", transferCanceled, false);
        var progressBarHolder = document.getElementById("DivIdProgressBarHolder");
        progressBarHolder.style.height = "10px";

        ajaxRequest.onreadystatechange = function () {
            if (ajaxRequest.readyState == 4) {

                //var text=getStringVariableText(ajaxRequest.responseText,stringVariable);
                //alert("Var="+text);

                sessionStorage.setItem(file, ajaxRequest.responseText);
                domStorage[file]=ajaxRequest.responseText;

            }
        }

        ajaxRequest.open(format, file, true);
        ajaxRequest.send();

        return requestVariable(file,format,stringVariable);

    }else{
        return getStringVariableText(cached,stringVariable);
    }
}

function customTrim(x) {
    return x.replace(/\s|\n/gi,'');
}

function getStringVariableText(fileText, stringVariable){
    var findStart   = '=\\0"';
    var findEnd   = '"\\0;';
    for(var index=0;index<fileText.length;index++) {
        var pos1 = fileText.indexOf(findStart);
        var pos2;
        if(customTrim(fileText.substring(0, pos1))==stringVariable){
            fileText=fileText.substring(pos1+4);
            pos2 = fileText.indexOf(findEnd);
            return fileText.substring(0, pos2);
        }
        pos2 = fileText.indexOf(findEnd);
        fileText=fileText.substring(pos2+4);
    }
    return "";
}

function getMultilingualText(format, stringLanguage, stringPageType, stringPageSubType, stringPage, stringVariable){
    return requestVariable("View/Languages/"+stringPageType+"/"+stringPageSubType+"/"+stringPage+"/"+stringLanguage+".lang", format, stringVariable);
}

function getMultilingualGETText(stringLanguage, stringPageType, stringPageSubType, stringPage, stringVariable){
    return getMultilingualText("GET",stringLanguage, stringPageType, stringPageSubType, stringPage, stringVariable);
}

function getMultilingualTextFromWindow(stringLanguage, stringPageSubType, stringPage, stringVariable){
    return getMultilingualGETText(stringLanguage, "Window", stringPageSubType, stringPage, stringVariable);
}

function getMultilingualTextFromWindowFromCommon(stringLanguage, stringPage, stringVariable){
    return getMultilingualTextFromWindow(stringLanguage, "Common", stringPage, stringVariable);
}

function getMultilingualTextFromWindowFromPopUp(stringLanguage, stringPage, stringVariable){
    return getMultilingualTextFromWindow(stringLanguage, "PopUp", stringPage, stringVariable);
}

function getMultilingualTextWithCurrentLanguage(format, stringPageType, stringPageSubType, stringPage, stringVariable){
    return requestVariable("View/Languages/"+stringPageType+"/"+stringPageSubType+"/"+stringPage+"/"+getCookie("language")+".lang", format, stringVariable);
}

function getMultilingualGETTextWithCurrentLanguage(stringPageType, stringPageSubType, stringPage, stringVariable){
    return getMultilingualTextWithCurrentLanguage("GET", stringPageType, stringPageSubType, stringPage, stringVariable);
}

function getMultilingualTextFromWindowWithCurrentLanguage(stringPageSubType, stringPage, stringVariable){
    return getMultilingualGETTextWithCurrentLanguage("Window", stringPageSubType, stringPage, stringVariable);
}

function getMultilingualTextFromWindowFromCommonWithCurrentLanguage(stringPage, stringVariable){
    return getMultilingualTextFromWindowWithCurrentLanguage("Common", stringPage, stringVariable);
}

function getMultilingualTextFromWindowFromPopUpWithCurrentLanguage(stringPage, stringVariable){
    return getMultilingualTextFromWindowWithCurrentLanguage("PopUp", stringPage, stringVariable);
}
