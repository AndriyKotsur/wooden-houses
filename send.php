<?php
    define('PROJECT_EMAIL', 'kotsurandriy@gmail.com');
    define('PROJECT_SUBJECT', 'Нова заявка із сайта zrub-dom.com.ua');
    define('PROJECT_NAME', 'zrub-dom.com.ua');

    $method = $_SERVER['REQUEST_METHOD'];
    $_POST = json_decode(file_get_contents("php://input"), true);

    if ($method !== 'POST') {
        return [
            'success' => false,
            'msg' => 'Invalid request method'
        ];
    }

    extract($_POST);

    if (empty($name) || empty($phone)) {
        return [
            'success' => false,
            'msg' => 'Invalid name or phone'
        ];
    }

    function adopt($text)
    {
        return '=?UTF-8?B?' . Base64_encode($text) . '?=';
    }

    function msgTemplate($name, $phone)
    {
        return "<table style='width: 100%;'>
                    <tr style='background-color: #f8f8f8;'>
                        <td style='padding: 10px; border: #e2dddd 1px solid;'><b>{$name}</b></td>
                        <td style='padding: 10px; border: #e2dddd 1px solid;'>{$phone}</td>
                    </tr>
                </table>";
    }

    $message = msgTemplate($name, $phone);

    $headers = "MIME-Version: 1.0" . PHP_EOL .
        "Content-Type: text/html; charset=utf-8" . PHP_EOL .
        'From: ' . adopt(PROJECT_NAME) . ' <' . PROJECT_EMAIL . '>' . PHP_EOL .
        'Reply-To: ' . PROJECT_EMAIL . '' . PHP_EOL;

    mail(PROJECT_EMAIL, adopt(PROJECT_SUBJECT), $message, $headers);