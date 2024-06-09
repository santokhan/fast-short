<?php
$full_path = $_SERVER['REQUEST_URI']; // /?hash=abc123
$path_array = parse_url($full_path); // Array(2) { ["path"]=> string(1) "/" ["query"]=> string(11) "hash=abc123" }
$path = $path_array['path'];
?>

<div class="mx-auto w-full max-w-screen-xl p-4">
    <div class="flex justify-center items-center gap-4">
        <?php
        if ($path == '' || $path == '/') {
            include './src/scroll-button.php';
        }
        ?>
        <div class="">
            <?php
            include './src/adsterra-ads/ads2.php';
            ?>
        </div>
        <?php
        if ($path == '' || $path == '/') {
            include './src/scroll-button.php';
        }
        ?>
    </div>
</div>