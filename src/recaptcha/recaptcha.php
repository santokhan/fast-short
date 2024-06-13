<?php
include './src/components/styles.php';
?>

<form id="myForm">
    <div class="flex flex-col justify-center items-center">
        <button class="g-recaptcha <?php echo $styleButton; ?>" data-sitekey="6LcWE_gpAAAAAFIpkGc7Dg3S7A5Jcgl_gSiwXwHd" data-callback='onSubmit' data-action='submit'>Verify reCAPTCHA</button>
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