<?php
    
    $subject = isset($_POST['subject']) ? $_POST['subject'] : 'Обратная связь';
    $data = isset($_POST['data_json']) ? json_decode($_POST['data_json']) : [];
    
    $to = 'salesygarage@gmail.com';

    $headers = "From: mypost@mail.domain\nReply-To: no-reply@mail.domain\r\n";
    $headers.= "Content-type: text/plain; charset=UTF-8\r\n";
    $headers.= "Content-transfer-encoding: quoted-printable";
    foreach ($data as $key => $value) {
        if ($value) {
            $message .= $key . ':' . $value . "\n";
        }
    } 

    mail($to, $subject, $message, $headers); 