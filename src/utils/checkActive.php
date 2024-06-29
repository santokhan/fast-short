<?php

function checkActive($to = '')
{
    $request_uri = $_SERVER['REQUEST_URI'];

    if ($request_uri == $to) {
        return true;
    } else {
        return false;
    }
}
