<?php // http://localhost:8001?hash=abc123 ?>

<?php
$hash = isset($_GET['hash']) ? $_GET['hash'] : '';
?>

<div class="mx-auto w-full max-w-screen-xl p-4">
    <h1 class="text-3xl font-bold text-center hidden">Shorten a long URL</h1>
    
    <?php include 'includes/job_cards.php'; ?>

    <div class="flex justify-center itmes-center">
        <?php include './src/continue-button.php'; ?>
    </div>
</div>