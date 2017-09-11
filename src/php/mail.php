<?php
  if (isset($_POST["name"]) && !empty($_POST["name"]) && isset($_POST["email"]) && !empty($_POST["email"])
    && isset($_POST["message"]) && !empty($_POST["message"])) {
    $name = strip_tags($_POST["name"]);
    $email = strip_tags($_POST["email"]);

    $to = "belsizebathrooms@btconnect.com";
    $subject = "Message from ".$name." <".$email.">";
    $message = "<p>Name: ".$name."</p>"."<p>Email: ".$email."</p>"."<p>".strip_tags($_POST["message"])."</p>";
    $message = wordwrap($message, 120);
    $headers = "From: ".$email."\r\n";
    $headers .= "Reply-To: ".$email."\r\n";
    $headers .= "MIME-Version: 1.0"."\r\n";
    $headers .= "Content-Type: text/html; charset=UTF-8"."\r\n";
    
    mail($to, $subject, $message, $headers);
  }

  header("Location: ../index.html");
?>