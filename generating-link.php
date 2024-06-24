<?php
include './src/components/continue-button.php';
?>

<div class="mx-auto w-full max-w-screen-xl p-4">
    <div class="">
        <?php include './includes/job_cards.php'; ?>
    </div>
    <div class="py-4 mt-4">
        <?php include './src/countdown.php'; ?>
    </div>

    <div class="flex justify-center itmes-center" id="scrollToBottom">
        <?php
        if (function_exists('anchor')) {
            anchor('/get-link', 'continueHidden');
        }
        ?>
    </div>
</div>