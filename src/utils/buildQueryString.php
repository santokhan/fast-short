<?php

function buildQueryString(array $params): string
{
    $queryString = '';
    foreach ($params as $key => $value) {
        // Skip null values
        if ($value === null) {
            continue;
        }

        // If the query string is not empty, append '&'
        if ($queryString !== '') {
            $queryString .= '&';
        }

        // Encode key and value and append to the query string
        $queryString .= urlencode($key) . '=' . urlencode($value);
    }
    
    // Add '?' if query string is not empty
    if ($queryString !== '') {
        $queryString = '?' . $queryString;
    }
    
    return $queryString;
}

// // example
// $params = array(
//     'name' => 'John Doe',
//     'age' => 30,
//     'city' => 'New York'
// );

// $queryString = buildQueryString($params);
// echo $queryString;
