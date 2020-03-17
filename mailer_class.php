<?php

class MyMail
{
    const PROJECT_EMAIL = 'kotsurandriy@gmail.com';
    const PROJECT_SUBJECT = 'Нова заявка із сайта *';
    const PROJECT_NAME = '*';

    public static function send($key, $data)
    {
        if ($key === 'contact-us') {
            return self::contactUs($data, [
                'name',
                'phone'
            ]);
        }

        //тут можна інші ключі і методи додати щоб розширти ф-л
    }

    protected static function contactUs($data, $requiredParams)
    {
        foreach ($requiredParams as $value) {
            if (empty($data[$value])) {
                return [
                    'success' => false,
                    'msg' => "Invalid {$value}"
                ];
            }
        }

        $message = self::generateMgTemplate($data);

        return self::sendMail($message);
    }

    protected static function sendMail($message)
    {
        $headers = "MIME-Version: 1.0" . PHP_EOL .
            "Content-Type: text/html; charset=utf-8" . PHP_EOL .
            'From: ' . adopt(PROJECT_NAME) . ' <' . PROJECT_EMAIL . '>' . PHP_EOL .
            'Reply-To: ' . PROJECT_EMAIL . '' . PHP_EOL;

        return mail(PROJECT_EMAIL, adopt(PROJECT_SUBJECT), $message, $headers);
    }

    protected static function generateMgTemplate($data)
    {
        //тепер сюда можна будь скілки параметрів передати у масиві
        $result = "<table style='width: 100%;'><tr style='background-color: #f8f8f8;'>";
        foreach ($data as $value) {
            $result .= " <td style='padding: 10px; border: #e2dddd 1px solid;'><b>{$value}</b></td>";
        }

        $result .= "</tr></table>";
        return $result;
    }

    protected static function adopt($text)
    {
        return '=?UTF-8?B?' . Base64_encode($text) . '?=';
    }
}