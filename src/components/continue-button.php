<?php
include './src/utils/getHash.php';
include './src/utils/buildQueryString.php';
include './src/components/styles.php';
include './src/utils/generateHTMLAttrubutes.php';

$current_hash = "";
$query = "";

if (function_exists('getHash')) {
    $current_hash = getHash();

    if (function_exists('buildQueryString') && $current_hash) {
        $query = buildQueryString(['hash' => $current_hash]);
    }
}

/**
 * Reusable function
 * Think about it before modify
 */
function anchor(string $path, string $id = '')
{
    global $styleButton, $query;

    if ($query) {
        $path .= $query;
    }

    $attr = generateHtmlAttributes(array_filter([
        'href' => $path,
        'class' => $styleButton,
        'id' => $id,
    ]));

    echo "<a $attr>";
    echo "Continue";
    include './src/arrow_right.php';
    echo "</a>";
}
