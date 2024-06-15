<?php
include './src/components/continue-button.php';
?>

<div class="mx-auto w-full max-w-screen-xl p-4">
    <h1 class="text-3xl font-bold text-center opacity-0">Shorten a long URL</h1>

    <?php include './includes/job_cards.php'; ?>
    <?php include './src/countdown.php'; ?>

    <div class="flex justify-center itmes-center" id="scrollToBottom">
        <?php
        if (function_exists('anchor')) {
            anchor('/generating-link', 'continueHidden');
        }
        ?>
    </div>
</div>