<?php // http://localhost:8001?hash=abc123 ?>

<?php
$hash = isset($_GET['hash']) ? $_GET['hash'] : '';

$_SESSION['temp_hash'] = $hash;
// Use the hash as needed
// unset($_SESSION['temp_hash']); // Destroy the hash after use
?>

<?php
setcookie('temp_hash', $hash, time() + (86400 * 1), '/'); // Cookie expires in 1 day
// Use the hash as needed
// setcookie('temp_hash', '', time() - 3600, '/'); // Destroy the cookie after use
?>

<div class="mx-auto w-full max-w-screen-xl p-4">
    <h1 class="text-3xl font-bold text-center hidden">Shorten a long URL</h1>
    
    <?php include 'includes/job_cards.php'; ?>

    <div class="flex justify-center itmes-center">
        <?php include './src/get_link_button.php'; ?>
    </div>
</div>