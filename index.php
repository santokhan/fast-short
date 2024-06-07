<!-- NGINX http://localhost:8080/ -->
<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <?php include './includes/head.php'; ?>
</head>

<body class="bg-gray-50">
    <?php include './includes/header.php'; ?>

    <main>
        <?php include './src/ads-scroll-to-bottom.php'; ?>

        <?php
        $full_path = $_SERVER['REQUEST_URI']; // /?hash=abc123
        $path_array = parse_url($full_path); // Array(2) { ["path"]=> string(1) "/" ["query"]=> string(11) "hash=abc123" }
        $path = $path_array['path'];

        switch ($path) {
            case '/':
                include 'home.php';
                break;
            case '/get-link':
                include 'get_link.php';
                break;
            case '/about':
                include 'about.php';
                break;
            case '/contact':
                include 'contact.php';
                break;
            case '/terms':
                include 'terms.php';
                break;
            case '/privacy-policy':
                include 'privacy.php';
                break;
            default:
                include '404.php';
                break;
        }
        ?>

        <div class="mx-auto w-full max-w-screen-xl p-4 flex flex-col items-center">
            <div class="">
                <?php include 'includes/ads1.php'; ?>
            </div>
            <?php
            //include 'includes/ads2.php'; 
            ?>
            <div class="">
                <?php include 'includes/ads_popunder.php'; ?>
            </div>
        </div>
    </main>

    <?php include './includes/footer.php'; ?>
</body>

</html>