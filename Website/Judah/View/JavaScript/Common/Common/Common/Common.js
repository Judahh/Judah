typeText="01001010 01110101 01100100 01100001 01101000 00100000 01001000 01101111 01101100 01100001 01101110 01100100 01100001 00100000 01000011 01101111 01110010 01110010 01100101 01101001 01100001 00100000 01001100 01101001 01101101 01100001 ";

divIdCodeBackgroundType = document.getElementById("DivIdCodeBackgroundType");

function toggleDivId(divId) {
    var element = document.getElementById(divId);
    if (element.style.display == 'none') {
        open(element);
    }else {
        close(element);
    }
}

function fadeInDivId(divId,time){
    var element = document.getElementById(divId);
    fadeIn(element,time);
}

function fadeOutDivId(divId,time){
    var element = document.getElementById(divId);
    fadeOut(element,time);
}

function fadeIn(element,time){
    fade(element,time,0,100);
}

function fadeOut(element,time){
    fade(element,time,100,0);
}

function audioFadeIn(element,time){
    audioFade(element,time,0,100);
}

function audioFadeOut(element,time){
    audioFade(element,time,100,0);
}

function closeDivId(divId){
    var element = document.getElementById(divId);
    close(element);
}

function openDivId(divId){
    var element = document.getElementById(divId);
    open(element);
}

function close(element){
    element.style.display = "none";
}

function open(element){
    element.style.display = "block";
}

function fade(element,time,initial,end){
    var increment = 0;
    if(initial < end){
        element.style.opacity = initial/100;
        element.style.filter = "alpha(opacity="+initial+")";
        increment = 1;
    }
    if(initial > end){
        increment = -1;
    }

    open(element);

    var opacity = initial;

    if(opacity == end){
        if(end == 0){
            close(element);
        }
    }

    var interval = setInterval(
        function(){
            if((opacity == end)){
                if(end == 0){
                    close(element);
                }
                clearInterval(interval);
            }else {
                opacity += increment;
                element.style.opacity = opacity/100;
                element.style.filter = "alpha(opacity="+opacity+")";
            }
        },time * 10);
}

function audioFade(element,time,initial,end){
    var increment = 0;
    if(initial < end){
        increment = 1;
    }
    if(initial > end){
        increment = -1;
    }

    var volume = initial;

    if(volume == end){
        if(end == 0){
            close(element);
            element.pause();
        }
    }

    var interval = setInterval(
        function(){
            if((volume == end)){
                if(end == 0){
                    close(element);
                    element.pause();
                }
                clearInterval(interval);
            }else {
                volume += increment;
                element.volume = volume/100;
            }
        },time * 10);
}

function goVerticalDivId(divId,time,initial,end,top){
    var element = document.getElementById(divId);
    goVertical(element,time,initial,end,top);
}

function goUp(element,time){
    goVertical(element,time,0,200,true);
}

function goDown(element,time){
    goVertical(element,time,0,200,false);
}

function goRight(element,time){
    goHorizontal(element,time,0,200,true);
}

function goLeft(element,time){
    goHorizontal(element,time,0,200,false);
}

function goBackLeft(element,time){
    goHorizontal(element,time,-100,0,false);
}

function goVertical(element,time,initial,end,top){
    var increment = 1;

    var vertical = initial;

    var interval = setInterval(
        function(){
            if((vertical == end)){
                clearInterval(interval);
            }else {
                vertical += increment;
                if(top){
                    element.style.bottom = vertical + "px";
                }else{
                    element.style.top = vertical + "px";
                }
            }
        },time * 10
    );
}

function goHorizontal(element,time,initial,end,right){
    var increment = 1;

    var horizontal = initial;

    var interval = setInterval(
        function(){
            if((horizontal == end)){
                clearInterval(interval);
            }else {
                horizontal += increment;
                if(right){
                    element.style.right = -horizontal + "px";
                }else{
                    element.style.right = horizontal + "px";
                }
            }
        },time * 10
    );
}

function request(element,file,format) {
    var domStorage=window.localStorage || (window.globalStorage? globalStorage[location.hostname] : null);
    var cached=domStorage[file];
    var cached2=sessionStorage.getItem(file);

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
                var ajaxDisplay = document.getElementById(element);
                ajaxDisplay.innerHTML = ajaxRequest.responseText;
            }
        }

        ajaxRequest.open(format, file, true);
        ajaxRequest.send();

        sessionStorage.setItem(file, ajaxRequest.responseText);
        domStorage[file]=ajaxRequest.responseText;
    }else{
        document.getElementById(element).innerHTML=cached;
    }
}

function goToPage(window) {
    request("DivIdPage","View/Frames/Common/Common/Window/Common/Common/"+window+".php","GET");
}

function updateProgress (oEvent) {
    if (oEvent.lengthComputable) {
        var percentComplete = oEvent.loaded / oEvent.total;
        var progressBar = document.getElementById("DivIdProgressBar");
        progressBarHolder.style.width=percentComplete+"%";
    } else {
        // Unable to compute progress information since the total size is unknown
    }
}

function transferComplete(evt) {
    var progressBarHolder = document.getElementById("DivIdProgressBarHolder");
    progressBarHolder.style.height="0px";
}

function transferFailed(evt) {
    alert("An error occurred while transferring the file.");
}

function transferCanceled(evt) {
    alert("The transfer has been canceled by the user.");
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
    alert('Error: Cache failed to update!');
};

function type(delay,currentChar) {
    var cut=1;
    var typeTextSubString= typeText.substr(currentChar, 1);

    currentChar++;
    if(typeTextSubString==" "){
        currentChar++;
        cut++;
        var typeTextSubString= typeText.substr(currentChar-2, 2);
    }
    if(isOverflow(divIdCodeBackgroundType)){
        divIdCodeBackgroundType.innerHTML = divIdCodeBackgroundType.innerHTML.substr(cut, divIdCodeBackgroundType.innerHTML.length + cut -1) + typeTextSubString;
    }else {

        divIdCodeBackgroundType.innerHTML += typeTextSubString;
    }
    if (currentChar>typeText.length){
        currentChar=1;

        setTimeout(type(delay,currentChar), delay);
    }else{
        setTimeout(type(delay,currentChar), delay);
    }
}

function isOverflow(element){
    if( element.offsetHeight < element.scrollHeight ||
        element.offsetWidth < element.scrollWidth){
        return true;
    }else{
        return false;
    }
}

function sendMailJobOffer(company, name, emails, phones, addresses, jobTitle, jobType, salary, workingHours,description) {
    var link = "mailto:judahholanda7@gmail.com"
    + "&subject=" + escape("Job Offer from "+name+" of "+company)
    + "&body=" + escape(description);

    window.location.href = link;
}

function sendMail() {

}