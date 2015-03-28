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

    //cached=null;
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
                sessionStorage.setItem(file, ajaxRequest.responseText);
                domStorage[file]=ajaxRequest.responseText;
            }
        }

        ajaxRequest.open(format, file, true);
        ajaxRequest.send();
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
        alert(getMultilingualTextFromWindowFromPopUp("English-USA", "Error", "yourBrowserDoesNotSupportWebWorkers"));
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

    fullDescription+="Job"+":"+jobTitle+"\n";

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
        fullDescription+=" ("+element.rows[i].cells[1].getElementsByTagName("select")[0].selectedIndex.value+")\n";
    }

    element=document.getElementById("TableIdAddress");
    fullDescription+="Address:\n";

    for(var i=0;i<element.rows.length;i++){
        fullDescription+=element.rows[i].cells[1].getElementsByTagName("input")[0].value+"\n";
    }

    sendMailJobOffer(company,name,fullDescription);
}

function downloadCurriculumVitae(){
    var myName = getMultilingualTextFromWindowFromCommonWithCurrentLanguage("Contact", "myName");
    var myTitle = getMultilingualTextFromWindowFromCommonWithCurrentLanguage("Contact", "myTitle");
    var contact = getMultilingualTextFromWindowFromCommonWithCurrentLanguage("Contact", "contact");
    var email = getMultilingualTextFromWindowFromCommonWithCurrentLanguage("Contact", "email");
    var myEmail = getMultilingualTextFromWindowFromCommonWithCurrentLanguage("Contact", "myEmail");
    var website = getMultilingualTextFromWindowFromCommonWithCurrentLanguage("Contact", "website");
    var myWebsite = getMultilingualTextFromWindowFromCommonWithCurrentLanguage("Contact", "myWebsite");

    var personalStatementTitle = getMultilingualTextFromWindowFromCommonWithCurrentLanguage("WhoAmI", "personalStatementTitle").toUpperCase();
    var personalStatement = getMultilingualTextFromWindowFromCommonWithCurrentLanguage("WhoAmI", "personalStatement");

    var diplomasCertificates = getMultilingualTextFromWindowFromCommonWithCurrentLanguage("Education", "diplomas/Certificates").toUpperCase();
    var talkingAboutDiplomasCertificates = getMultilingualTextFromWindowFromCommonWithCurrentLanguage("Education", "talkingAboutDiplomas/Certificates");
    var hardware = getMultilingualTextFromWindowFromCommonWithCurrentLanguage("Education", "hardware").toUpperCase();
    var talkingAboutHardware = getMultilingualTextFromWindowFromCommonWithCurrentLanguage("Education", "talkingAboutHardware");
    var software = getMultilingualTextFromWindowFromCommonWithCurrentLanguage("Education", "software").toUpperCase();
    var talkingAboutSoftware = getMultilingualTextFromWindowFromCommonWithCurrentLanguage("Education", "talkingAboutSoftware");
    var web = getMultilingualTextFromWindowFromCommonWithCurrentLanguage("Education", "web").toUpperCase();
    var talkingAboutWeb = getMultilingualTextFromWindowFromCommonWithCurrentLanguage("Education", "talkingAboutWeb");
    var mobile = getMultilingualTextFromWindowFromCommonWithCurrentLanguage("Education", "mobile").toUpperCase();
    var talkingAboutMobile = getMultilingualTextFromWindowFromCommonWithCurrentLanguage("Education", "talkingAboutMobile");

    var intelligence = getMultilingualTextFromWindowFromCommonWithCurrentLanguage("Skills", "intelligence").toUpperCase();
    var talkingAboutIntelligence = getMultilingualTextFromWindowFromCommonWithCurrentLanguage("Skills", "talkingAboutIntelligence");
    var teamwork = getMultilingualTextFromWindowFromCommonWithCurrentLanguage("Skills", "teamwork").toUpperCase();
    var talkingAboutTeamwork = getMultilingualTextFromWindowFromCommonWithCurrentLanguage("Skills", "talkingAboutTeamwork");
    var leadership = getMultilingualTextFromWindowFromCommonWithCurrentLanguage("Skills", "leadership").toUpperCase();
    var talkingAboutLeadership = getMultilingualTextFromWindowFromCommonWithCurrentLanguage("Skills", "talkingAboutLeadership");
    var languagesCommunication = getMultilingualTextFromWindowFromCommonWithCurrentLanguage("Skills", "languages/Communication").toUpperCase();
    var talkingAboutLanguagesCommunication = getMultilingualTextFromWindowFromCommonWithCurrentLanguage("Skills", "talkingAboutLanguages/Communication");
    var flexibility = getMultilingualTextFromWindowFromCommonWithCurrentLanguage("Skills", "flexibility").toUpperCase();
    var talkingAboutFlexibility = getMultilingualTextFromWindowFromCommonWithCurrentLanguage("Skills", "talkingAboutFlexibility");

    var doc = new jsPDF();


    var imgData = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/4QB0RXhpZgAATU0AKgAAAAgABAEaAAUAAAABAAAAPgEbAAUAAAABAAAARgEoAAMAAAABAAIAAIdpAAQAAAABAAAATgAAAAAAAABIAAAAAQAAAEgAAAABAAKgAgAEAAAAAQAAAL6gAwAEAAAAAQAAAL4AAAAA/+0AOFBob3Rvc2hvcCAzLjAAOEJJTQQEAAAAAAAAOEJJTQQlAAAAAAAQ1B2M2Y8AsgTpgAmY7PhCfv/iB7hJQ0NfUFJPRklMRQABAQAAB6hhcHBsAiAAAG1udHJSR0IgWFlaIAfZAAIAGQALABoAC2Fjc3BBUFBMAAAAAGFwcGwAAAAAAAAAAAAAAAAAAAAAAAD21gABAAAAANMtYXBwbAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAC2Rlc2MAAAEIAAAAb2RzY20AAAF4AAAFbGNwcnQAAAbkAAAAOHd0cHQAAAccAAAAFHJYWVoAAAcwAAAAFGdYWVoAAAdEAAAAFGJYWVoAAAdYAAAAFHJUUkMAAAdsAAAADmNoYWQAAAd8AAAALGJUUkMAAAdsAAAADmdUUkMAAAdsAAAADmRlc2MAAAAAAAAAFEdlbmVyaWMgUkdCIFByb2ZpbGUAAAAAAAAAAAAAABRHZW5lcmljIFJHQiBQcm9maWxlAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABtbHVjAAAAAAAAAB4AAAAMc2tTSwAAACgAAAF4aHJIUgAAACgAAAGgY2FFUwAAACQAAAHIcHRCUgAAACYAAAHsdWtVQQAAACoAAAISZnJGVQAAACgAAAI8emhUVwAAABYAAAJkaXRJVAAAACgAAAJ6bmJOTwAAACYAAAKia29LUgAAABYAAALIY3NDWgAAACIAAALeaGVJTAAAAB4AAAMAZGVERQAAACwAAAMeaHVIVQAAACgAAANKc3ZTRQAAACYAAAKiemhDTgAAABYAAANyamFKUAAAABoAAAOIcm9STwAAACQAAAOiZWxHUgAAACIAAAPGcHRQTwAAACYAAAPobmxOTAAAACgAAAQOZXNFUwAAACYAAAPodGhUSAAAACQAAAQ2dHJUUgAAACIAAARaZmlGSQAAACgAAAR8cGxQTAAAACwAAASkcnVSVQAAACIAAATQYXJFRwAAACYAAATyZW5VUwAAACYAAAUYZGFESwAAAC4AAAU+AFYBYQBlAG8AYgBlAGMAbgD9ACAAUgBHAEIAIABwAHIAbwBmAGkAbABHAGUAbgBlAHIAaQENAGsAaQAgAFIARwBCACAAcAByAG8AZgBpAGwAUABlAHIAZgBpAGwAIABSAEcAQgAgAGcAZQBuAOgAcgBpAGMAUABlAHIAZgBpAGwAIABSAEcAQgAgAEcAZQBuAOkAcgBpAGMAbwQXBDAEMwQwBDsETAQ9BDgEOQAgBD8EQAQ+BEQEMAQ5BDsAIABSAEcAQgBQAHIAbwBmAGkAbAAgAGcA6QBuAOkAcgBpAHEAdQBlACAAUgBWAEKQGnUoACAAUgBHAEIAIIJyX2ljz4/wAFAAcgBvAGYAaQBsAG8AIABSAEcAQgAgAGcAZQBuAGUAcgBpAGMAbwBHAGUAbgBlAHIAaQBzAGsAIABSAEcAQgAtAHAAcgBvAGYAaQBsx3y8GAAgAFIARwBCACDVBLhc0wzHfABPAGIAZQBjAG4A/QAgAFIARwBCACAAcAByAG8AZgBpAGwF5AXoBdUF5AXZBdwAIABSAEcAQgAgBdsF3AXcBdkAQQBsAGwAZwBlAG0AZQBpAG4AZQBzACAAUgBHAEIALQBQAHIAbwBmAGkAbADBAGwAdABhAGwA4QBuAG8AcwAgAFIARwBCACAAcAByAG8AZgBpAGxmbpAaACAAUgBHAEIAIGPPj/Blh072TgCCLAAgAFIARwBCACAw1zDtMNUwoTCkMOsAUAByAG8AZgBpAGwAIABSAEcAQgAgAGcAZQBuAGUAcgBpAGMDkwO1A70DuQO6A8wAIAPAA8EDvwPGA68DuwAgAFIARwBCAFAAZQByAGYAaQBsACAAUgBHAEIAIABnAGUAbgDpAHIAaQBjAG8AQQBsAGcAZQBtAGUAZQBuACAAUgBHAEIALQBwAHIAbwBmAGkAZQBsDkIOGw4jDkQOHw4lDkwAIABSAEcAQgAgDhcOMQ5IDicORA4bAEcAZQBuAGUAbAAgAFIARwBCACAAUAByAG8AZgBpAGwAaQBZAGwAZQBpAG4AZQBuACAAUgBHAEIALQBwAHIAbwBmAGkAaQBsAGkAVQBuAGkAdwBlAHIAcwBhAGwAbgB5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';
    doc.addFont('OpenSans-Light', 'Open Sans - Light', 'normal');
    doc.setFont('Open Sans - Light');

    doc.setFontSize(16);
    doc.text(15, 20, myName);
    doc.setFontSize(10);
    doc.setTextColor(150);
    doc.text(15, 25, myTitle);

    doc.text(130, 15, contact);
    doc.text(135, 20, email+": "+myEmail);
    doc.text(135, 25, website+": "+myWebsite);

    doc.setLineWidth(0.1);
    doc.setDrawColor(150);
    doc.line(133, 17, 133, 26);

    doc.addImage(imgData, 'JPEG', 15, 30, 80, 80);

    doc.setTextColor(0);
    doc.text(15, 115, personalStatementTitle);
    doc.setDrawColor(0);
    doc.line(13, 116, 103, 116);
    doc.setTextColor(150);
    personalStatement=doc.splitTextToSize(personalStatement, 210);
    doc.text(15, 120, personalStatement);

    doc.setTextColor(0);
    doc.text(107, 115, personalStatementTitle);
    doc.setDrawColor(0);
    doc.line(105, 116, 195, 116);
    doc.setTextColor(150);
    personalStatement=doc.splitTextToSize(personalStatement, 210);
    doc.text(107, 120, personalStatement);

    doc.output('save');
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

function phoneTypes(){
    var element=document.getElementById("TableIdPhone").children[0].children[0].children[1].children[0].children[0];
    var types=["",""];
    types[0]=customTrim(element.children[0].innerHTML);
    types[1]=customTrim(element.children[1].innerHTML);
    return types;
}

function addPhone() {
    var element=document.getElementById("TableIdPhone");
    var types=phoneTypes();
    var row=addRow(element, "Phone");
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    cell1.innerHTML = '<div id="DivIdRedCircle"><div id="DivIdCircleText" onclick="removePhone('+(element.rows.length-1)+')">-</div></div>';
    cell2.innerHTML = '<label><select id="SelectIdPhone"><option id="OptionIdPhone">'+types[0]+'</option><option id="OptionIdPhone">'+types[1]+'</option></select></label>';
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