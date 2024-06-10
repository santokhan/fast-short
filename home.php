<?php
$hash = isset($_GET['hash']) ? $_GET['hash'] : '';

$_SESSION['temp_hash'] = $hash;
// Use the hash as needed
// unset($_SESSION['temp_hash']); // Destroy the hash after use
?>

<?php
// setcookie('temp_hash', $hash, time() + (86400 * 1), '/'); // Cookie expires in 1 day
// Use the hash as needed
// setcookie('temp_hash', '', time() - 3600, '/'); // Destroy the cookie after use
?>

<div class="mx-auto w-full max-w-screen-xl p-4">
    <h1 class="text-3xl font-bold text-center hidden">Shorten a long URL</h1>

    <?php include 'includes/job_cards.php'; ?>

    <div id="countdown" class="text-center">Please wait 10 seconds</div>

    <script>
        // Initial countdown value
        let countdownValue = 10;

        // Function to update the countdown
        function updateCountdown() {
            if (countdownValue >= 0) {
                document.getElementById('countdown').textContent = `Please wait ${countdownValue} seconds`;
                countdownValue--;
            } else {
                clearInterval(countdownInterval);
                document.getElementById('countdown').textContent = "";
                document.getElementById('')
            }
        }

        // Update the countdown every second
        const countdownInterval = setInterval(updateCountdown, 1000);
    </script>
    <div class="flex justify-center itmes-center">
        <?php include './src/continue-button.php'; ?>
    </div>
</div>