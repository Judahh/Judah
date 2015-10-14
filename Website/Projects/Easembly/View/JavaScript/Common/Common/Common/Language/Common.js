function languageToNative(language){
    switch (language){
        case "Portuguese-Brazil":
            return "Português/Brasil";
        default:
            return "English/USA";
    }
}

function languageToEnglish(language){
    switch (language){
        case "Português/Brasil":
            return "Portuguese-Brazil";
        default:
            return "English-USA";
    }
}