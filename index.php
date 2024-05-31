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

    <div class="mx-auto w-full max-w-screen-xl p-4">
        <div class="flex flex-wrap justify-center">
            <div class="basis-80 flex-grow">
                <?php
                include 'includes/ads1.php';
                ?>
            </div>
            <div class="basis-80 flex-grow">
                <?php
                include 'includes/ads2.php';
                ?>
            </div>
        </div>
        <div class="">
            <?php
            include 'includes/ads_popunder.php';
            ?>
        </div>
    </div>

    <?php
    include 'includes/footer.php';
    ?>
</body>

</html>