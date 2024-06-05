<?php
function get_original_url($hash) {
    // Assuming you have an API endpoint where you need to send the hash as a query parameter
    $api_url = 'https://1xshort.com/get-url?hash=' . urlencode($hash);

    // Make the API request
    $response = file_get_contents($api_url);

    // Check if the request was successful
    if ($response === FALSE) {
        // Handle error
        return "Error occurred while making API request.";
    } else {
        // Return the API response
        return $response;
    }
}

// // Usage example:
// $hash = isset($_GET['hash']) ? $_GET['hash'] : '';

// // Call the function with the hash parameter
// $response = get_original_url($hash);

// echo "API response: " . $response;