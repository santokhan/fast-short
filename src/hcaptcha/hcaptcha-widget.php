<?php include './src/components/styles.php'; ?>

<form id="hcaptcha">
    <div class="flex justify-center items-center flex-col gap-4">
        <!-- https://dashboard.hcaptcha.com/sites/edit/a8787758-b72c-4ff0-8522-fa206a48b894 -->
        <div class="h-captcha" data-sitekey="b3a7acb5-7a15-4c45-952e-b2468222cc2e"></div>
        <button type="submit" class="<?= $styleButton ?>">Submit</button>
    </div>
</form>

<script>
    window.addEventListener("load", () => {
        document.getElementById("hcaptcha").addEventListener('submit', (e) => {
            e.preventDefault();
            const hcaptchaResponse = document.querySelector('[name="h-captcha-response"]').value;
            const formData = new FormData(e.target);
            formData.append('secret', 'ES_f3d775dfb6b8436eb982749e0eb2e94a');
            formData.append('response', hcaptchaResponse);

            if (!hcaptchaResponse) {
                alert('CAPTCHA verification failed. Please try again.');
                return;
            }

            // console.log(formData.get("h-captcha-response"), formData.get("g-recaptcha-response"));

            fetch("https://hcaptcha.com/siteverify", {
                method: "POST",
                body: formData,
            }).then(res => res.json()).then(data => {
                if (result.success) {
                    alert('CAPTCHA verification successful. Proceeding with form submission.');
                    document.getElementById("getLink").style.display = "block";
                } else {
                    alert('CAPTCHA verification failed. Please try again.');
                }
            }).catch(console.error)
        })
    })
</script>