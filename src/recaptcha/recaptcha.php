<?php
include './src/components/styles.php';

$style = 'inline-flex justify-center items-center gap-4 px-4 py-4 bg-white border text-lg';
?>

<form id="myForm">
    <div class="flex justify-center items-center">
        <button class="g-recaptcha <?= $style ?>" data-sitekey="6LeBhgAqAAAAACfbQRP3X4xdyTOEX36wmdsHfacR" data-callback='onSubmit' data-action='submit'>
            <span class="size-6 border bg-gray-50"></span>
            <span>I&apos;m not a robot</span>
            <img src="/assets/images/captcha.webp" alt="captcha" class="size-12 object-contain ml-8 lg:ml-12">
        </button>
    </div>
</form>

<script src="https://www.google.com/recaptcha/api.js"></script>

<script>
    function onSubmit(token) {
        // Add token to the form data
        var formData = new FormData();
        formData.append('g-recaptcha-response', token);

        // Send form data to verify.php using Fetch API
        fetch('/verify', {
                method: 'POST',
                body: formData
            })
            .then(function(response) {
                return response.json();
            })
            .then(function(data) {
                // Handle the response from verify.php
                if (data.status === 'success') {
                    console.log('Form submission successful');
                    // Optionally, show success message or update UI
                    document.getElementById("getLink").style.display = "flex";
                    document.getElementById("myForm").style.display = "none";
                } else {
                    console.error('Form submission failed:', data.message);
                    // Optionally, show error message or update UI
                }
            })
            .catch(function(error) {
                console.error('Error:', error);
                // Handle fetch error (if needed)
            });
    }
</script>