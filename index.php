<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

$full_path = $_SERVER['REQUEST_URI']; // /?hash=abc123
$path_array = parse_url($full_path); // Array(2) { ["path"]=> string(1) "/" ["query"]=> string(11) "hash=abc123" }
$path = $path_array['path'];

switch ($path) {
    case '/sitemap':
        header('Content-Type: application/xml');
        echo file_get_contents('./sitemap.xml');
        exit;

    case '/verify':
        include './src/recaptcha/verify.php';
        exit;

    default:
        # code...
        exit;
}
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <?php
    include './includes/head.php';
    ?>
</head>

<body class="bg-gray-50">
    <?php include './includes/header.php'; ?>

    <div class="!min-h-[60vh]">
        <?php
        switch ($path) {
            case '/':
                include 'home.php';
                break;
            case '/about':
                include 'about.php';
                break;
            case '/affiliate':
                include './src/pages/affiliate.php';
                break;
            case '/faq':
                include './src/pages/faq.php';
                break;
            case '/contact':
                include 'contact.php';
                break;
            case '/events-calender':
                include './src/pages/events-calender.php';
                break;
            case '/generating-link':
                include 'generating-link.php';
                break;
            case '/gallery':
                include './src/pages/gallery.php';
                break;
            case '/guide':
                include './src/pages/guide.php';
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
    </div>

    <?php
    include './includes/footer.php';
    ?>
</body>

</html>