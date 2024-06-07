<?php

function get_original_url($hash) {
    // Assuming you have an API endpoint where you need to send the hash as a query parameter
    $api_url = 'https://1xshort.com/get-url?hash=' . urlencode($hash);

    // Initialize cURL session
    $ch = curl_init();

    // Set cURL options
    curl_setopt($ch, CURLOPT_URL, $api_url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_FAILONERROR, true);

    // Execute the cURL request
    $response = curl_exec($ch);

    // Check if the request was successful
    if (curl_errno($ch)) {
        // Handle error
        $error_msg = curl_error($ch);
        curl_close($ch);
        return "Error occurred while making API request: " . $error_msg;
    } else {
        // Close the cURL session
        curl_close($ch);
        // Return the API response
        return $response;
    }
}


// // Usage example:
// $hash = isset($_GET['hash']) ? $_GET['hash'] : '';

// // Call the function with the hash parameter
// $response = get_original_url($hash);

// echo "API response: " . $response;