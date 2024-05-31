<!-- NGINX http://localhost:8080/ -->

<!DOCTYPE html>
<html lang="en">

<head>
    <?php
    include 'includes/head.php';
    ?>
</head>

<body class="bg-gray-50">
    <?php
    include 'includes/header.php';
    ?>

    <main>

        <?php
        $path = $_SERVER['REQUEST_URI'];

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

    </main>

    <?php
    include 'includes/ads1.php';
    ?>
    <?php
    include 'includes/ads2.php';
    ?>
    <?php
    include 'includes/ads_popunder.php';
    ?>

    <?php
    include 'includes/footer.php';
    ?>
</body>

</html>