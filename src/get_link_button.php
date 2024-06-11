<?php
include './src/utils/get_original_url.php';
include './src/utils/getHash.php';
include './src/components/styles.php';

// if (function_exists('curl_version')) {
//     echo 'cURL is enabled.';
// } else {
//     echo 'cURL is not enabled.';
// }


$current_hash = getHash();
$redirect = "";

if ($current_hash) {
    $redirect = get_original_url($current_hash);
}
?>

<a href="<?= $redirect ?>" class="<?= $styleButton ?>">
    <span class="whitespace-nowrap">Get link</span>
    <?php include './src/arrow_angle.php'; ?>
</a>