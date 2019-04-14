<?php

require 'vendors/phpmailer/PHPMailerAutoload.php';

const MATERIAL_COLORS = [
    'silicone' => 'Силикон',
];

const POMPOM_COLORS = [
    'DDD' => '3D печать',
];

const DECORATION_TYPES = [
    'free' => 'Бесплатная упаковка',
];

const DECORATION_COLORS = [
    'free' => 'Бесплатная упаковка',
];

const GIFTS = [
    'free' => 'Бесплатная упаковка',
];

$timeDate = date('d.m.Y H:i:s');

$_POST['name'] && $contact_information = addString('Имя', $_POST['name']);
$_POST['phone'] && $contact_information .= addString('Телефон', $_POST['phone']);
$_POST['email'] && $contact_information .= addString('Почта', $_POST['email']);

$_POST['boots_color'] && $details = addString('Цвет валешей', MATERIAL_COLORS[$_POST['boots_color']]);
$_POST['pompoms_color'] && $details .= addString('Цвет помпонов', POMPOM_COLORS[$_POST['pompoms_color']]);
$_POST['decoration_type'] && $details .= addString('Тип украшений', DECORATION_TYPES[$_POST['decoration_type']]);
$_POST['decoration_color'] && $details .= addString('Цвет украшений', DECORATION_COLORS[$_POST['decoration_color']]);
$_POST['foot_size'] && $details .= addString('Размер ноги', $_POST['foot_size']);
$_POST['gift'] && $details .= addString('Подарок', GIFTS[$_POST['gift']]);

$template = file_get_contents("order.html");

sendEmail(
    'info@ivaleshi.ru',
    str_replace(['{contact_information}', '{details}'], [$details, $contact_information], $template),
    'Заказ'
);

if ($_POST['email']) {
    $template = file_get_contents("booklet.html");
    sendEmail($_POST['email'], $template, 'Запрос буклета');
}

function sendEmail(string $email, string $template, string $subject)
{
    $mail = new PHPMailer;

    $mail->isSMTP();

    $mail->Host = 'smtp.yandex.ru';
    $mail->SMTPAuth = true;
    $mail->Username = 'info@ivaleshi.ru';
    $mail->Password = 'QYwhhm9P5G';
    $mail->SMTPSecure = 'ssl';
    $mail->Port = '465';

    $mail->CharSet = 'UTF-8';
    $mail->From = 'info@ivaleshi.ru';
    $mail->FromName = 'info@ivaleshi.ru';
    $mail->addAddress($email);
    $mail->isHTML(true);

    $mail->Subject = $subject;
    $mail->Body = $template;

    $mail->send();
}

function addString($name, $value)
{
    return "<tr style=''><td style='padding: 10px; border: #e9e9e9 1px solid;'><b>$name:</b></td><td style='padding: 10px; border: #e9e9e9 1px solid;'>stripslashes($value)</td></tr>";
}