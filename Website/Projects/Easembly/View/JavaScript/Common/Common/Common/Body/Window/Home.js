function homeSmoothScroll(eID) {
    if(!document.getElementById(eID)){
        goToPage("Home");
    }
    smoothScroll(eID);
}