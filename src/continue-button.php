<?php
$current_hash = "";
$query = "";

if (isset($_GET["hash"])) {
    $current_hash = $_GET["hash"];
    $query = "?hash=$current_hash";
}
?>

<a href="/generating-link<?php echo $query; ?>" title="<?php echo $current_hash; ?>" id="continue" class="hidden inline-flex+ items-center justify-center rounded-lg bg-blue-700 px-4 py-2.5 text-center text-base font-medium text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 gap-2 relative z-[9147483647]">Continue<?php include './src/arrow_right.php'; ?></a>