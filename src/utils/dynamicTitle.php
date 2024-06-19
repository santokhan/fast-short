<?php
function dynamicTitle()
{
    $requestUri = $_SERVER['REQUEST_URI'];
    $pathName = parse_url($requestUri, PHP_URL_PATH);

    $title = '';

    switch ($pathName) {
        case '/':
            global $title;
            $title = 'Find Job';
            break;

        case '/about':
            global $title;
            $title = 'About';
            break;

        case '/contact':
            global $title;
            $title = 'Contact';
            break;

        case '/terms':
            global $title;
            $title = 'Terms';
            break;

        case '/privacy':
            global $title;
            $title = 'Privacy';
            break;

        default:
            global $title;
            $title = 'Find Job';
            break;
    }

    return $title;
}
