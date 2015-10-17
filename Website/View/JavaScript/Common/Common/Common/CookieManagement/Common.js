function getCookie(name) {
    var cookiename = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(cookiename) == 0) return c.substring(cookiename.length,c.length);
    }
    return null;
}

function removeCookie(name, path, domain) {
    // If the cookie exists
    if (getCookie(name)) {
        setCookie(name, "", 1);
    }
}

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}

function getFromCache(name){
    var domStorage=window.localStorage || (window.globalStorage? globalStorage[location.hostname] : null);
    var cached=domStorage[name];
    var cached2=sessionStorage.getItem(name);

    if (cached==null||cached==''||cached==undefined) {
        cached=cached2;
    }

    if (cached==null||cached==''||cached==undefined) {
        cached=null;
    }
    return cached;
}

function saveInCache(name, file){
    var domStorage=window.localStorage || (window.globalStorage? globalStorage[location.hostname] : null);
    sessionStorage.setItem(name, file);
    domStorage[name]=file;
}

function saveInCacheAFile(file, element){
    var domStorage=window.localStorage || (window.globalStorage? globalStorage[location.hostname] : null);
    var doc = document.getElementById(element).innerHTML;
    //alert("VAI SALVAR!");
    //alert(doc);
    sessionStorage.setItem(file, doc);
    domStorage[file]=doc;
}

function boolIsToSaveElementInCache(file) {
    if(file.includes('CodeEditor')||file.includes('EditorSettings')){
        return false;
    }
    return true;
}