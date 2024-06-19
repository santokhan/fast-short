<?php
include './src/components/continue-button.php';
?>

<div class="mx-auto w-full max-w-screen-xl px-4">
    <h1 class="text-3xl font-bold text-center flex items-center justify-center">Find jobs on MyTeamJob<?php include './src/scroll-button.php'; ?></h1>

    <?php include './includes/job_cards.php'; ?>

    <div class="flex justify-center itmes-center py-8" id="scrollToBottom">
        <?php include './src/countdown.php'; ?>
        <?php
        if (function_exists('anchor')) {
            anchor('/generating-link', 'continueHidden');
        }
        ?>
    </div>
</div>