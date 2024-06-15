<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

$full_path = $_SERVER['REQUEST_URI']; // /?hash=abc123
$path_array = parse_url($full_path); // Array(2) { ["path"]=> string(1) "/" ["query"]=> string(11) "hash=abc123" }
$path = $path_array['path'];

if ($path == '/sitemap.xml') {
    echo file_get_contents('/sitemap.xml');
    exit;
}

if ($path == '/verify') {
    include './src/recaptcha/verify.php';
    exit;
}
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <?php
    include './src/adsense-script.php';
    include './src/analytics.php';
    include './includes/head.php';
    include './src/gtm/google-tag-head.php';
    ?>
</head>

<body class="bg-gray-50">
    <?php include './includes/header.php'; ?>
    
    <main class="h-screen !min-h-screen">
        <?php

        include './src/ads-scroll-to-bottom.php';

        switch ($path) {
            case '/':
                include 'home.php';
                break;
            case '/about':
                include 'about.php';
                break;
            case '/contact':
                include 'contact.php';
                break;
            case '/generating-link':
                include 'generating-link.php';
                break;
            case '/job':
                include 'job.php';
                break;
            case '/get-link':
                include 'get_link.php';
                break;
            case '/privacy-policy':
                include 'privacy.php';
                break;
            case '/terms':
                include 'terms.php';
                break;
            default:
                include '404.php';
                break;
        }
        ?>
    </main>

    <?php
    include './includes/footer.php';
    include './src/gtm/google-tag-body.php';
    ?>
</body>

</html>