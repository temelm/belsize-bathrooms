<?php
    if (isset($_POST["name"]) && isset($_POST["email"]) && isset($_POST["message"])) {
        $msg = "Name: ".$_POST["name"]."\nEmail: ".$_POST["email"]."\nMessage: ".$_POST["message"];
        mail("mustafatemel90@gmail.com", "Belsize Bathrooms", $msg);
    }
    header("Location: /belsize-bathrooms/");
?>