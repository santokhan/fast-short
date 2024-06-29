<?php
// Ensure POST request
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Your secret key from Google reCAPTCHA
    $secret = "6LcWE_gpAAAAAOML3Svb_wp4eP5MhSylLFGS6M16";

    // Verify the reCAPTCHA response
    $response = $_POST['g-recaptcha-response'];
    $remoteip = $_SERVER['REMOTE_ADDR'];

    $url = "https://www.google.com/recaptcha/api/siteverify";
    $data = [
        'secret' => $secret,
        'response' => $response,
        'remoteip' => $remoteip
    ];

    $options = [
        'http' => [
            'header' => "Content-Type: application/x-www-form-urlencoded\r\n",
            'method' => 'POST',
            'content' => http_build_query($data)
        ]
    ];

    $context = stream_context_create($options);
    $result = file_get_contents($url, false, $context);
    $resultJson = json_decode($result);

    if ($resultJson->success) {
        // reCAPTCHA verification succeeded, process your form here
        // Example: Save form data to database
        $formData = $_POST; // Example: Process form data
        // Process $formData as needed (e.g., save to database)

        // Send back a response (if required)
        echo json_encode(['status' => 'success', 'message' => 'Form submission successful']);
    } else {
        // reCAPTCHA verification failed, show error message
        echo json_encode(['status' => 'error', 'message' => 'reCAPTCHA verification failed']);
    }
} else {
    // Handle non-POST requests
    echo json_encode(['status' => 'error', 'message' => 'Invalid request method']);
}