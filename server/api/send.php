<?php

require  './config.php';
require 'vendors/phpmailer/PHPMailerAutoload.php';

const MATERIAL_COLORS = [
    'black' => 'черный',
    'blue' => 'синий',
    'brown' => 'коричневый',
    'darkred' => 'темно-красный',
    'chocolate' => 'шоколад',
    'darkblue' => 'темно-синий',
    'darkgreen' => 'темно-зеленый',
    'darkorange' => 'темно-оранжевый',
    'darkviolet' => 'темно-фиолетовый',
    'olive' => 'оливковый',
    'fuchsia' => 'фуксия',
    'gray' => 'серый',
    'green' => 'зеленый',
    'mediumorchid' => 'светло-сиреневый',
    'darkkhaki' => 'горчичный',
    'natblack' => 'натурально-черный',
    'orange' => 'оранжевый',
    'pink' => 'розовый',
    'purple' => 'пурпурный',
    'red' => 'красный',
    'turquoise' => 'бирюзовый',
    'violet' => 'фиолетовый',
    'white' => 'белый',
    'yellow' => 'желтый',
];

const POMPOM_COLORS = [
    'black' => 'черный',
    'yellow' => 'желтый',
    'blue' => 'синий',
    'turquoise' => 'бирюзовый',
    'darkgray' => 'темно-серый',
    'violet' => 'фиолетовы1',
    'lightblue' => 'светло-голубой',
    'brown' => 'коричневый',
    'orange' => 'оранжевый',
    'empty' => 'без помпона',
];

const DECORATION_TYPES = [
    'beads' => 'бусы',
    'rhinestones' => 'стразы',
    'empry' => 'без украшений',
];

const GIFTS = [
    'spray' => 'средство по уходу',
    'gloves' => 'перчатки',
    'socks' => 'носки',
    'hat' => 'шапка',
];

$timeDate = date('d.m.Y H:i:s');

$_POST['name'] && $contact_information = addString('Имя', $_POST['name']);
$_POST['phone'] && $contact_information .= addString('Телефон', $_POST['phone']);
$_POST['email'] && $contact_information .= addString('Почта', $_POST['email']);

$_POST['boots_color'] && $details = addString('Цвет валешей', MATERIAL_COLORS[$_POST['boots_color']]);
$_POST['pompoms_color'] && $details .= addString('Цвет помпонов', POMPOM_COLORS[$_POST['pompoms_color']]);
$_POST['decoration_type'] && $details .= addString('Тип украшений', $_POST['decoration_type']);
//$_POST['decoration_color'] && $details .= addString('Цвет украшений', DECORATION_COLORS[$_POST['decoration_color']]);
$_POST['foot_size'] && $details .= addString('Размер ноги', $_POST['foot_size']);
$_POST['gift'] && $details .= addString('Подарок', $_POST['gift']);

$template = file_get_contents("order.html");
$subject = 'Заказ';

//письмо заказчику
if ($_POST['email']) {
    $template = file_get_contents("booklet.html");
    sendEmail($_POST['email'], $template, 'Буклет по уходу за Валешами');
    $subject = 'Запрос буклета';
}

//письмо в базу
sendEmail(
    'info@ivaleshi.ru',
    str_replace(['{contact_information}', '{details}'], [$details, $contact_information], $template),
    $subject
);

function sendEmail(string $email, string $template, string $subject)
{
    $mail = new PHPMailer;
    $mail->isSMTP(true);
    $mail->Host = 'smtp.yandex.ru';
    $mail->SMTPAuth = true;
    $mail->Username = 'info@ivaleshi.ru';
    $mail->Password = PASSWORD;
    $mail->SMTPSecure = 'ssl';
    $mail->Port = '465';
    $mail->CharSet = 'UTF-8';
    $mail->From = 'info@ivaleshi.ru';
    $mail->FromName = 'ivaleshi.ru';
    $mail->addAddress($email);
    $mail->isHTML(true);
    $mail->Subject = $subject;
    $mail->Body = $template;
    $mail->send();
}

function addString($name, $value)
{
    return "<tr style=''><td style='padding: 10px; border: #e9e9e9 1px solid;'><b>$name:</b></td><td style='padding: 10px; border: #e9e9e9 1px solid;'>" . stripslashes($value) . "</td></tr>";
}