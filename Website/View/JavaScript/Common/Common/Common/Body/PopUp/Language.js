function changeLanguageTemporary(language) {
    document.getElementById("DivIdSelectedLanguage").innerHTML=document.getElementById("DivIdSelectedLanguage").innerHTML.split(": ")[0]+": "+language;
}

function changeLanguage() {
    var language = document.getElementById("DivIdSelectedLanguage").innerHTML.split(": ")[1].split("</div>")[0];
    language=languageToEnglish(language);
    if(language!=getCookie("language")) {
        setLanguage(language);

        testAjax();
        sessionStorage.clear();
        localStorage.clear();
        //var domStorage=window.localStorage || (window.globalStorage? globalStorage[location.hostname] : null);
        //if(domStorage!=null) {
        //    domStorage=null;//.clear();
        //}

        document.getElementById("DivIdPopUpBox").innerHTML = "";

        goToPage(document.getElementById("DivIdCode").children[0].id.split("DivId")[1]);

        getMenu("DivIdMenuRight","MenuRight","SubMenuRight");
    }
}

function changeLanguageAndPopUpClose(window) {
    changeLanguage();
    popUpClose(window);
}