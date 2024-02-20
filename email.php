<?php

if(isset($_POST["submit"])){

    $email = $_POST["email"];
    $phoneNumber = $_POST["phoneNumber"];
    $to= "shakhdxb@gmail.com";
    $subject = "download";

    if(filter_var($email, FILTER_VALIDATE_EMAIL)){
    echo "Ваш запрос отправлен";
    
    if(mail($to, $subject, $email, $phoneNumber,)){
    } else{
            echo "Вы все сделали правильно, но при отправке запроса произошла ошибка.";
    }
} else{
    echo "Адрес электронной почты или номер телефона неверен";
}
}


?>