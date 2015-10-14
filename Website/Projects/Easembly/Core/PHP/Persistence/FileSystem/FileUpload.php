<?php
$data = array();

if(isset($_GET['file'])) {
    $error = false;
    $file = $_GET['file'];
    $files = array();

    $uploaddir = '../../../../User';

    if(move_uploaded_file($file[0], $uploaddir .basename($file[0])))
    {
        $files[] = $uploaddir .$file[0];
    }
    else
    {
        $error = true;
    }

    $data = ($error) ? array('error' => 'There was an error uploading your files') : array('files' => $files);
} else {
    $data = array('success' => 'Form was submitted', 'formData' => $_POST);
}

echo json_encode($data);