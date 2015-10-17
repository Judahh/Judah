function newCode() {
    getMultilingualTextFromWindowFromCommonWithCurrentLanguage("CodeEditor", "projectTitle", 8, 0);
}

function newCodeTitleReceived(newTitle) {
    document.getElementById("DivIdCodeTitleText").innerHTML = newTitle;
}

function refreshCodeTitleText(newTitle){
    document.getElementById("DivIdCodeTitleText").innerHTML = newTitle;
}

function checkCodeEditorLoad(){
    return (document.getElementById("ScriptId"+"RequireJS")!=null);
}

function getCodeEditorCount(){
    var count=getFromCache('codeEditorCount');
    if(count==null){
        saveInCache('codeEditorCount',0);
    }
    return count;
}

function codeEditorLoad(){
    //alert("asfasdf");
    if(!checkCodeEditorLoad()) {
        require = {
            baseUrl: window.location.protocol + "//" + window.location.host + window.location.pathname.split("/").slice(0, -1).join("/"),
            paths: {
                ace: "View/JavaScript/Common/Common/Common/Editor/ace-1.1.9/lib/ace"
            },
            waitSeconds: 30
        };

        loadFile("View/JavaScript/Common/Common/Common/Editor/ace-1.1.9/demo/kitchen-sink/require.js", "js", "View/JavaScript/Common/Common/Common/Editor/ace-1.1.9/demo/kitchen-sink/demo", "ScriptIdRequireJS");

        //requireBase("View/JavaScript/Common/Common/Common/Editor/require.js");

        //$.getScript("View/JavaScript/Common/Common/Common/Editor/require.js", function(){
        //
        //    alert("Script loaded but not necessarily executed.");
        //
        //});

        //$(".TextAreaClassLined").linedtextarea(
        //    {selectedLine: 1}
        //);
        //$("#mytextarea").linedtextarea();

        //env.editor.setTheme("Clean");
    }
}
