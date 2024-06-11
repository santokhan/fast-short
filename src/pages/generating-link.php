<?php
include './src/components/continue-button.php';
?>

<div class="mx-auto w-full max-w-screen-xl p-4">
    <?php include './includes/job_cards.php'; ?>
    <?php include './src/countdown.php'; ?>

    <div class="flex justify-center itmes-center">
        <?php
        if (function_exists('anchor')) {
            anchor('/get-link', 'continueHidden');
        }
        ?>
    </div>
</div>