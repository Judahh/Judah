var typeWorker;
var require;

function getLastPage(){
    var lastPage=getFromCache('lastPage');
    if(lastPage==null){
        goToPage("Home");
    }else{
        goToPage(lastPage);
    }
}

function removeAceScripts() {
    //var allScripts = document.getElementsByTagName("script");
    //var src=null;
    //for(var index = 0, max = allScripts.length; index < max; index++) {
    //    if(allScripts[index]!=undefined||allScripts[index]!=null) {
    //        src = allScripts[index].getAttribute("src");
    //        if (src != null) {
    //            if (stringContainsString(src, "ace-1.1.9")) {
    //                allScripts[index].innerHTML = null;
    //                allScripts[index].remove();
    //            }
    //        }
    //    }
    //}
}

function stringContainsString(string,stringB) {
    return (string.indexOf(stringB) != -1);
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