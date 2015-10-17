<?php
$data = array();
$file = $_POST['data'];
$files = array();

$files = json_decode($file);

$name=$files[0];
$name = preg_replace('/\s+/', '', $name);
$name = preg_replace("/[^A-Za-z0-9]/", "", $name);
if (strpos($name,'.asm') == false) {
    $name = $name.'.asm';
}
////$name="test.asm";
$fileText=$files[1];

$uploadFolder = '../../../../User/';

$newFile = fopen($uploadFolder.$name, "w");// or die("Unable to open file!");
fwrite($newFile, $fileText);
fclose($newFile);
$data = array('success' => 'name:'.$name.' file:'.$fileText.' !');
echo json_encode($data);