function getLanguage(){
    if(getCookie("language")==null) {
        var file="View/Languages/RetrieveLanguage.php";
        var domStorage=window.localStorage || (window.globalStorage? globalStorage[location.hostname] : null);
        var cached=domStorage[file];
        var cached2=sessionStorage.getItem(file);

        if (cached==null||cached==''||cached==undefined) {
            cached=cached2;
        }


        if (cached==null||cached==''||cached==undefined) {
            getMultilingualGETCurrentLanguageBasic();
        }else{
            setLanguage(getStringVariableText(cached,"language"));
        }
    }
}

function setLanguage(language){
    setCookie("language", language, 5);

    var domStorage=window.localStorage || (window.globalStorage? globalStorage[location.hostname] : null);
    sessionStorage.setItem("language", language);
    domStorage["language"]= language;
}