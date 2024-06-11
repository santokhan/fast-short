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
            document.getElementById('continueHidden').style.display = "flex";
        }
    }

    // Update the countdown every second
    const countdownInterval = setInterval(updateCountdown, 1000);
</script>