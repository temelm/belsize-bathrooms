<?php
    if (isset($_POST["name"]) && isset($_POST["email"]) && isset($_POST["message"])) {
        $to = "mustafatemel90@gmail.com"; // belsizebathrooms@btconnect.com 
        $subject = $_POST["name"]." - ".$_POST["email"];
        $message = $_POST["message"]."\n\n--------\n\n".$_POST["name"]."\n".$_POST["email"];
        
        mail($to, $subject, $message);
    }
    
    header("Location: /belsize-bathrooms/");
?>