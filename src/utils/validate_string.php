<?php

function validate_string($input)
{
    // Check if the input is set and is a string
    if (isset($input) && is_string($input)) {
        return $input; // Return the input if it's valid
    } else {
        return ''; // Return empty string otherwise
    }
}

// // Example usage:
// $hash = validate_string('');
// echo $hash;
