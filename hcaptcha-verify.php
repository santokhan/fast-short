<?php
$response = $_POST['h-captcha-response'];
$secretKey = 'ES_f3d775dfb6b8436eb982749e0eb2e94a';
$url = 'https://hcaptcha.com/siteverify';

$data = array(
    'secret' => $secretKey,
    'response' => $response
);

$options = array(
    'http' => array(
        'method' => 'POST',
        'content' => http_build_query($data)
    )
);

$context = stream_context_create($options);
$verify = file_get_contents($url, false, $context);
$captcha_success = json_decode($verify);

if ($captcha_success->success == false) {
    // CAPTCHA verification failed
    die("CAPTCHA verification failed. Please try again.");
} else if ($captcha_success->success == true) {
    // CAPTCHA verification succeeded
    echo "CAPTCHA verification successful. Proceed with form submission.";
    // Process the form submission here
}
