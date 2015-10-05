<?php
//namespace View\Languages;
/**
 * Created by PhpStorm.
 * User: Judah
 * Date: 1/30/15
 * Time: 14:43
 */

$setDomain = "localhost";
$days = 5;

if (!isset($_COOKIE["language"])) {
    $language = substr($_SERVER['HTTP_ACCEPT_LANGUAGE'], 0, 2);
    switch ($language){
        case "pt-br":
        case "pt":
            $language = "Portuguese-Brazil";
            break;
        default:
            $language = "English-USA";
            break;
    }
    setcookie("language", $language, $days*24*60*60*1000, '/', $setDomain, false, false);
}else{
//    var_dump($_COOKIE["language"]);
    $language = $_COOKIE["language"];
//    $language;
}