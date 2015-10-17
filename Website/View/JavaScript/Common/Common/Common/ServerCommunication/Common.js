function requireBase(script) {
    //alert("ENTROU!");
    $.ajax({
        url: script,
        dataType: "script",
        async: false,           // <-- This is the key
        success: function () {
            // all good...
        },
        error: function () {
            throw new Error("Could not load script " + script);
        }
    });
}

function testAjax(){
    // Create a new XHR request object.
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

    // Open the AJAX connection.
    ajaxRequest.open("GET", "indexPage.php", false);

    // Send the request. Since this request is being made
    // *Synchronously*, we don't have to keep a ready-state
    // change handler.
    ajaxRequest.send();
}

function codeEditorCheck(file) {
    //alert("asfasdfasdfasdfasdfasdf");
    //alert(file);
    if(file.includes('FileTree')) {
        initPHPFileTree();
    }

    if(file.includes('CodeEditor')) {
        saveInCache('codeEditorCount',1);
        //alert(getCodeEditorCount());
        if(document.getElementById("DivIdPopUpBox").innerHTML==""||document.getElementById("DivId"+"EditorSettings")==null) {
            //alert("LOAD!");
            request("DivIdPopUpBox", "View/Frames/Common/Common/Window/Common/PopUp/" + "EditorSettings" + ".php", "GET");
            //}else{
            //    alert("CARREGOU!");
            //    codeEditorLoad();
        }
        //document.getElementById("DivIdSubMenuSettingsHolder").style.display="block";
        //document.getElementById("DivIdSubMenuSettingsHolder2").style.display="block";
    }

    if(file.includes('EditorSettings')) {
        if(checkCodeEditorLoad()) {
            //document.getElementById("ScriptId" + "RequireJS").innerHTML = null;
            //document.getElementById("ScriptId" + "RequireJS").remove();
            //removeAceScripts();

            if(getCodeEditorCount()!=1){
                //alert("BOOM:"+getCodeEditorCount());
                openPopUp('EditorSettings');
                saveInCache('codeEditorCount',0);
                location.reload();
            }
            //goToPage('CodeEditor');
        }
        //alert("CARREGOU!");
        if(document.getElementById("DivId"+"CodeEditor")!=null){
            codeEditorLoad();
            //saveInCacheAFile("View/Frames/Common/Common/Window/Common/PopUp/" + "EditorSettings" + ".php", "DivId"+"PopUpBox");
            //saveInCacheAFile("View/Frames/Common/Common/Window/Common/Common/" + "CodeEditor" + ".php", "DivId"+"Page");
        }
    }
}

function request(element,file,format) {
    var domStorage=window.localStorage || (window.globalStorage? globalStorage[location.hostname] : null);
    var cached=domStorage[file];
    var cached2=sessionStorage.getItem(file);

    if (cached==null||cached==''||cached==undefined) {
        cached=cached2;
    }

    //cached=null;
    //alert("Cached of "+file+"=("+cached+")");

    if (cached==null||cached==''||cached==undefined||((file.includes('EditorSettings')||file.includes('CodeEditor')) && editorLoaded==false)) {
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
                var ajaxDisplay = document.getElementById(element);
                ajaxDisplay.innerHTML = ajaxRequest.responseText;

                if(boolIsToSaveElementInCache(file)) {
                    sessionStorage.setItem(file, ajaxRequest.responseText);
                    domStorage[file] = ajaxRequest.responseText;
                }

                codeEditorCheck(file);
                //reloadGoogleGeolocation(file);
            }
        }

        ajaxRequest.open(format, file, true);
        ajaxRequest.send();
    }else{
        document.getElementById(element).innerHTML=cached;
        //alert("EXISTE!!!");
        codeEditorCheck(file);
        //reloadGoogleGeolocation(file);
    }
}

function updateProgress (oEvent) {
    if (oEvent.lengthComputable) {
        var percentComplete = oEvent.loaded / oEvent.total;
        var progressBar = document.getElementById("DivIdProgressBar");
        progressBar.style.width=percentComplete+"%";
    } else {
        // Unable to compute progress information since the total size is unknown
    }
}

function transferComplete(evt) {
    var progressBarHolder = document.getElementById("DivIdProgressBarHolder");
    progressBarHolder.style.height="0px";
}

function transferFailed(evt) {
    alert(getMultilingualTextFromWindowFromPopUp("English-USA", "Error", "AnErrorOccurredWhileTransferringTheFile"));
}

function transferCanceled(evt) {
    alert(getMultilingualTextFromWindowFromPopUp("English-USA", "Error", "TheTransferHasBeenCanceledByTheUser"));
}

function handleCacheEvent(evt) {

    if (window.applicationCache.status == window.applicationCache.UPDATEREADY) {
        // Browser downloaded a new app cache.
        // Swap it in and reload the page to get the new hotness.
        window.applicationCache.swapCache();
        if (confirm('A new version of this site is available. Load it?')) {
            window.location.reload();
        }
    } else {
        // Manifest didn't changed. Nothing new to server.
    }

}

function handleCacheError(evt) {
    alert(getMultilingualTextFromWindowFromPopUp("English-USA", "Error", "cacheFailedToUpdate"));
}

function goToSpecialPage(window,windowSpecial) {
    if(true) {//todo
        request("DivIdPage", "View/Frames/Common/Common/Window/Common/Common/" + window + ".php", "GET");
    }else{
        request("DivIdPage", "View/Frames/Common/Common/Window/Common/Common/" + windowSpecial + ".php", "GET");
    }
}

function goToPage(window) {
    saveInCache('lastPage',window);
    //saveInCache('lastPage','CodeEditor');
    request("DivIdPage","View/Frames/Common/Common/Window/Common/Common/"+window+".php","GET");
}

function getMenu(divIdMenu,menu,subMenu) {
    request(divIdMenu,"View/Frames/Common/Common/Common/Header/"+menu+"/"+subMenu+".php","GET");
}

function uploadFile(event, file, filename) {
    event.stopPropagation(); // Stop stuff happening
    event.preventDefault(); // Totally stop stuff happening

    // START A LOADING SPINNER HERE
    var progressBarHolder = document.getElementById("DivIdProgressBarHolder");
    progressBarHolder.style.height = "10px";
    var percentComplete = event.loaded / event.total;
    var progressBar = document.getElementById("DivIdProgressBar");
    progressBar.style.width=percentComplete+"%";

    var data = [filename, file];

    $.ajax({
        url: 'Core/PHP/Persistence/FileSystem/FileUpload.php?file',
        type: 'POST',
        data: data,
        cache: false,
        dataType: 'json',
        processData: false, // Don't process the files
        contentType: false, // Set content type to false as jQuery will tell the server its a query string request
        success: function(data) {
            if(typeof data.error === 'undefined') {
                // Success so call function to process the form
                submitForm(event, data);
                var progressBarHolder = document.getElementById("DivIdProgressBarHolder");
                progressBarHolder.style.height="0px";
            } else {
                // Handle errors here

                console.log('ERRORS: ' + data.error);
            }
        },
        error: function(jqXHR, textStatus) {
            // Handle errors here
            console.log('ERRORS: ' + textStatus);
            // STOP LOADING SPINNER
        }
    });
}

function saveCode() {
    var filename = document.getElementById("DivIdCodeTitleText").innerHTML;
    var file = env.editor.getSession().getValue();
    var path;
    //TODO:  terminar
}