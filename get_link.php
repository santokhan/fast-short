<div class="mx-auto w-full max-w-screen-xl p-4">
    <h1 class="text-3xl font-bold text-center hidden">Shorten a long URL</h1>
    <?php include 'includes/job_cards.php'; ?>
    <?php
    include './src/hcaptcha/hcaptcha-script.php';
    // include './src/hcaptcha/hcaptcha-verify.php';  
    include './src/hcaptcha/hcaptcha-widget.php';
    ?>
    <div class="flex justify-center itmes-center mt-4" id="scrollToBottom">
        <?php include './src/get_link_button.php'; ?>
    </div>
    <div class="w-full">
        <?php include './src/adsense-ads/multiple-ads.php'; ?>
    </div>
</div>