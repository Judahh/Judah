/**
 * Created by Judah on 10/1/15.
 */

function initPHPFileTree() {
    if (!document.getElementsByTagName) return;

    var aMenus = document.getElementsByTagName("LI");
    for (var i = 0; i < aMenus.length; i++) {
        var mclass = aMenus[i].className;
        if (mclass.indexOf("LiClassPHPFileTreeDirectory") > -1) {
            var submenu = aMenus[i].childNodes;
            for (var j = 0; j < submenu.length; j++) {
                if (submenu[j].tagName == "A") {

                    submenu[j].onclick = function() {
                        var node = this.nextSibling;

                        while (1) {
                            if (node != null) {
                                if (node.tagName == "UL") {
                                    var d = (node.style.display == "none")
                                    node.style.display = (d) ? "block" : "none";
                                    this.className = (d) ? "open" : "closed";
                                    return false;
                                }
                                node = node.nextSibling;
                            } else {
                                return false;
                            }
                        }
                        return false;
                    }

                    submenu[j].className = (mclass.indexOf("open") > -1) ? "open" : "closed";
                }

                if (submenu[j].tagName == "UL")
                    submenu[j].style.display = (mclass.indexOf("open") > -1) ? "block" : "none";
            }
        }
    }
    return false;
}

function fileTreeController() {

    // Hide all subfolders at startup
    $(".DivClassPHPFileTree").find("UL").hide();

    // Expand/collapse on click
    $(".pft-directory A").click( function() {
        $(this).parent().find("UL:first").slideToggle("medium");
        if( $(this).parent().attr('className') == "LiClassPHPFileTreeDirectory" ) return false;
    });

}
