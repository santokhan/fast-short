<?php
$current_hash = "";
$query = "";

if (isset($_GET["hash"])) {
    $current_hash = $_GET["hash"];
    $query = "?hash=$current_hash";
}
?>

<a href="/get-link<?php echo $query; ?>" title="<?php echo $current_hash; ?>" id="scrollToBottom" class="inline-flex items-center justify-center rounded-lg bg-blue-700 px-4 py-2.5 text-center text-base font-medium text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 flex gap-2 items-center relative z-[9147483647]">Continue<?php include './src/arrow_right.php'; ?></a>