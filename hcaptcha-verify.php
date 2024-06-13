<?php

if (!isset($_POST['h-captcha-response'])) {
    die("CAPTCHA verification failed. Please try again.");
}

$response = $_POST['h-captcha-response'];
$secretKey = 'ES_f3d775dfb6b8436eb982749e0eb2e94a';
$url = 'https://hcaptcha.com/siteverify';

$data = array(
    'secret' => $secretKey,
    'response' => $response
);

$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_POST, 1);
curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($data));
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

$verify = curl_exec($ch);
curl_close($ch);

if ($verify === false) {
    die("Error contacting hCaptcha verification server. Please try again.");
}

$captcha_success = json_decode($verify);

if ($captcha_success->success == false) {
    die("CAPTCHA verification failed. Please try again.");
} else if ($captcha_success->success == true) {
    echo "CAPTCHA verification successful. Proceed with form submission.";
    // Process the form submission here
}