<?php include './src/components/styles.php'; ?>

<form action="/hcaptcha-verify">
    <div class="flex justify-center items-center flex-col gap-4">
        <!-- https://dashboard.hcaptcha.com/sites/edit/a8787758-b72c-4ff0-8522-fa206a48b894 -->
        <div class="h-captcha" data-sitekey="b3a7acb5-7a15-4c45-952e-b2468222cc2e"></div>
        <button type="button" class="<?= $styleButton ?>">Submit</button>
    </div>
</form>