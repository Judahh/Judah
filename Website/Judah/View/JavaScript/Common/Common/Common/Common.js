var typeWorker;

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

function startTypeWorker() {
    if(typeof(Worker) !== "undefined") {
        if(typeof(typeWorker) == "undefined") {
            typeWorker = new Worker("View/JavaScript/Common/Common/Common/TypeWorker.js");//View/JavaScript/Common/Common/Common/TypeWorker.js
        }
        typeWorker.onmessage = function(event) {
            var divIdCodeBackgroundType = document.getElementById("DivIdCodeBackgroundType");
            var typeTextSubString=event.data[0];
            var cut=event.data[1];
            if(isOverflow(divIdCodeBackgroundType)){
                divIdCodeBackgroundType.innerHTML = divIdCodeBackgroundType.innerHTML.substr(cut, divIdCodeBackgroundType.innerHTML.length + cut -1) + typeTextSubString;
            }else {
                divIdCodeBackgroundType.innerHTML += typeTextSubString;
            }
        };
    } else {
        alert("Sorry, your browser does not support Web Workers...");
    }
}

function stopTypeWorker() {
    typeWorker.terminate();
    typeWorker = undefined;
}

function isOverflow(element){
    if(element.offsetHeight > getHeight()){
        return true;
    }else{
        return false;
    }
}

function getHeight() {
    var body = document.body,
        html = document.documentElement;

    return  Math.max( body.scrollHeight, body.offsetHeight,
        html.clientHeight, html.scrollHeight, html.offsetHeight );
}

function weekDays(i){
    switch (i){
        case 0:
            return "Monday";
        case 1:
            return "Sunday";
        case 2:
            return "Tuesday";
        case 3:
            return "Wednesday";
        case 4:
            return "Thursday";
        case 5:
            return "Friday";
        default:
            return "Saturday";
    }
}

function sendMailJobOffer(company, name, description) {
    var link = "mailto:judahholanda7@gmail.com"
    + "?subject=" + escape("Job Offer from "+name+" of "+company)
    + "&body=" + escape(description);

    window.location.href = link;
}

function sendMail() {
    var fullDescription='';
    var company=document.getElementById("InputIdCompany").value;
    var name=document.getElementById("InputIdName").value;

    //var emails;
    //var phones;
    //var address;

    var e=document.getElementById("SelectIdJobTitleType");

    var jobTitle=document.getElementById("InputIdJobTitle").value+"("+e.options[e.selectedIndex].value+")";

    fullDescription+="Job:"+jobTitle+"\n";

    e=document.getElementById("SelectIdSalaryCoin");
    var e2=document.getElementById("SelectIdSalaryType");

    var salary=document.getElementById("InputIdSalary").value+" "+e.options[e.selectedIndex].value+e2.options[e2.selectedIndex].value;

    if(document.getElementById("squaredOne1").checked){
        salary+=' (flexible)';
    }

    fullDescription+="Salary:"+salary+"\n";

    var week="";

    for(var i=0;i<7;i++){
        if(document.getElementById("squaredOne"+(i+2)).checked) {
            week+=weekDays(i)+", ";
        }
    }

    week=week.substr(0,week.length-2);

    var weekFlexible=document.getElementById("squaredOne9").checked;

    if(weekFlexible){
        week+=' (flexible)';
    }

    fullDescription+="Days:"+week+"\n";

    var inT=document.getElementById("InputIdHourIn").value+"h";

    if(document.getElementById("squaredOne10").checked){
        inT+=' (flexible)';
    }

    var outT=document.getElementById("InputIdHourOut").value+"h";

    if(document.getElementById("squaredOne11").checked){
        outT+=' (flexible)';
    }

    fullDescription+="From "+inT+" to "+outT+"\n";

    var description=document.getElementById("TextAreaIdDescription").value;

    fullDescription+="Description:\n"+description+"\n";

    var element=document.getElementById("TableIdEmail");
    fullDescription+="Email:\n";

    for(var i=0;i<element.rows.length;i++){
        fullDescription+=element.rows[i].cells[1].getElementsByTagName("input")[0].value+"\n";
    }

    element=document.getElementById("TableIdPhone");
    fullDescription+="Phone:\n";

    for(var i=0;i<element.rows.length;i++){

        fullDescription+=element.rows[i].cells[2].getElementsByTagName("input")[0].value;
        if(element.rows[i].cells[1].getElementsByTagName("select")[0].selectedIndex==0){
            fullDescription+=" (landline)\n";
        }else{
            fullDescription+=" (mobile)\n";
        }
    }

    element=document.getElementById("TableIdAddress");
    fullDescription+="Address:\n";

    for(var i=0;i<element.rows.length;i++){
        fullDescription+=element.rows[i].cells[1].getElementsByTagName("input")[0].value+"\n";
    }

    sendMailJobOffer(company,name,fullDescription);
}

function removeRow(element, type, index){
    if(element.rows.length>1) {
        for(var i=index;i<element.rows.length;i++){
            element.rows[i].cells[0].innerHTML='<div id="DivIdRedCircle"><div id="DivIdCircleText" onclick="remove'+type+'('+(i-1)+')">-</div></div>';
        }
        if(index==element.rows.length-1){
            element.rows[index-1].cells[(element.rows[index-1].length-1)].innerHTML='<div id="DivIdBlueCircle"><div id="DivIdCircleText" onclick="add'+type+'()">+</div></div>';
        }
        element.deleteRow(index);
    }
    if(element.rows.length==1) {
        element.rows[0].cells[0].innerHTML='';
    }
}

function removeEmail(index) {
    var element=document.getElementById("TableIdEmail");
    removeRow(element, "Email", index);
}

function removePhone(index) {
    var element=document.getElementById("TableIdPhone");
    removeRow(element, "Phone", index);
}

function removeAddress(index) {
    var element=document.getElementById("TableIdAddress");
    removeRow(element, "Address", index);
}

function addRow(element, type){
    element.rows[element.rows.length-1].cells[(element.rows[element.rows.length-1].cells.length-1)].innerHTML="";
    if(element.rows.length==1) {
        element.rows[0].cells[0].innerHTML='<div id="DivIdRedCircle"><div id="DivIdCircleText" onclick="remove'+type+'(0)">-</div></div>';
    }
    return element.insertRow(element.rows.length);
}

function addEmail() {
    var element=document.getElementById("TableIdEmail");
    var row=addRow(element, "Email");
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    cell1.innerHTML = '<div id="DivIdRedCircle"><div id="DivIdCircleText" onclick="removeEmail('+(element.rows.length-1)+')">-</div></div>';
    cell2.innerHTML = '<input id="InputIdEmail"></input>';
    cell3.innerHTML = '<div id="DivIdBlueCircle"><div id="DivIdCircleText" onclick="addEmail()">+</div></div>';
}

function addPhone() {
    var element=document.getElementById("TableIdPhone");
    var row=addRow(element, "Phone");
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    cell1.innerHTML = '<div id="DivIdRedCircle"><div id="DivIdCircleText" onclick="removePhone('+(element.rows.length-1)+')">-</div></div>';
    cell2.innerHTML = '<label> <select id="SelectIdPhone"> <option id="OptionIdPhone"> <div id="DivIdIcon">6</div> </option> <option id="OptionIdPhone"><div id="DivIdIcon">´</div></option> </select> </label>';
    cell3.innerHTML = '<input id="InputIdPhone"></input>';
    cell4.innerHTML = '<div id="DivIdBlueCircle"><div id="DivIdCircleText" onclick="addPhone()">+</div></div>';
}

function addAddress() {
    var element=document.getElementById("TableIdAddress");
    var row=addRow(element, "Address");
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    cell1.innerHTML = '<div id="DivIdRedCircle"><div id="DivIdCircleText" onclick="removeAddress('+(element.rows.length-1)+')">-</div></div>';
    cell2.innerHTML = '<input id="InputIdAddress"></input>';
    cell3.innerHTML = '<div id="DivIdBlueCircle"><div id="DivIdCircleText" onclick="addAddress()">+</div></div>';
}

function goToPage(window) {
    request("DivIdPage","View/Frames/Common/Common/Window/Common/Common/"+window+".php","GET");
}