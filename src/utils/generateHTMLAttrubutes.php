<?php
/**
 * Generate HTML attributes from an associative array.
 *
 * @param array $attributes Associative array of attributes and their values.
 * @return string Generated HTML attributes string.
 */
function generateHtmlAttributes(array $attributes): string {
    $attributeString = '';

    foreach ($attributes as $key => $value) {
        // Ensure value is properly escaped
        $escapedValue = htmlspecialchars($value, ENT_QUOTES, 'UTF-8');
        $attributeString .= sprintf(' %s="%s"', $key, $escapedValue);
    }

    return $attributeString;
}

// // Example usage:
// $attributes = [
//     'class' => 'btn btn-primary',
//     'id' => 'submitBtn',
//     'data-toggle' => 'modal',
//     'data-target' => '#myModal'
// ];

// echo '<button' . generateHtmlAttributes($attributes) . '>Submit</button>';
