function toggleDivId(divId) {
    var element = document.getElementById(divId);
    if (element.style.display == 'none') {
        openElement(element);
    }else {
        closeElement(element);
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
    closeElement(element);
}

function openDivId(divId){
    var element = document.getElementById(divId);
    openElement(element);
}

function closeElement(element){
    element.style.display = "none";
}

function openElement(element){
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

    openElement(element);

    var opacity = initial;

    if(opacity == end){
        if(end == 0){
            closeElement(element);
        }
    }

    var interval = setInterval(
        function(){
            if((opacity == end)){
                if(end == 0){
                    closeElement(element);
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
            closeElement(element);
            element.pause();
        }
    }

    var interval = setInterval(
        function(){
            if((volume == end)){
                if(end == 0){
                    closeElement(element);
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

//function scrollIntoView(elementID) {
//    var element = document.getElementById(elementID);
//    if (!!element && element.scrollIntoView) {
//        element.scrollIntoView();
//    }
//}
//
//function scrollToView(elementID) {
//    window.scroll(0, findPos(document.getElementById(elementID)));
//}

function scrollIntoView(elementID) {
    var element = document.getElementById(elementID);
    //$("#fromTHIS").click(function () {
    $("html, body").animate({scrollTop: element.offset().top}, 500);
    //console.log('executed scrollToElement');
    //return true;
    //});
}

function findPos(obj) {
    var curtop = 0;
    if (obj.offsetParent) {
        do {
            curtop += obj.offsetTop;
        } while (obj = obj.offsetParent);
        return [curtop];
    }
}

function currentVerticalPosition() {
    // Firefox, Chrome, Opera, Safari
    if (self.pageYOffset) return self.pageYOffset;
    // Internet Explorer 6 - standards mode
    if (document.documentElement && document.documentElement.scrollTop)
        return document.documentElement.scrollTop;
    // Internet Explorer 6, 7 and 8
    if (document.body.scrollTop) return document.body.scrollTop;
    return 0;
}

function elementVerticalPosition(eID) {
    var elm = document.getElementById(eID);
    var y = elm.offsetTop;
    var node = elm;
    while (node.offsetParent && node.offsetParent != document.body) {
        node = node.offsetParent;
        y += node.offsetTop;
    } return y;
}

function smoothScroll(eID) {
    var startY = currentVerticalPosition();
    var stopY = elementVerticalPosition(eID);
    var distance = stopY > startY ? stopY - startY : startY - stopY;
    if (distance < 100) {
        scrollTo(0, stopY); return;
    }
    var speed = Math.round(distance / 100);
    if (speed >= 20) speed = 20;
    var step = Math.round(distance / 25);
    var leapY = stopY > startY ? startY + step : startY - step;
    var timer = 0;
    if (stopY > startY) {
        for ( var i=startY; i<stopY; i+=step ) {
            setTimeout("window.scrollTo(0, "+leapY+")", timer * speed);
            leapY += step; if (leapY > stopY) leapY = stopY; timer++;
        } return;
    }
    for ( var i=startY; i>stopY; i-=step ) {
        setTimeout("window.scrollTo(0, "+leapY+")", timer * speed);
        leapY -= step; if (leapY < stopY) leapY = stopY; timer++;
    }
    return false;
}