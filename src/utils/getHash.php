<?php

function getHash()
{
    $current_hash = "";
    if (isset($_GET["hash"])) {
        $current_hash = $_GET["hash"];
    }
    return $current_hash;
}

// // Example
// echo getHash();