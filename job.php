<?php
include './includes/job_cards_data.php';

$job_id = $_GET['id'];
$post = $job_posts[$job_id];
?>

<div class="max-w-screen-xl mx-auto px-4 py-12 lg:py-20 space-y-6">
    <h1 class="text-3xl font-bold"><?= $post['title'] ?></h1>
    <p><?= $post['description'] ?></p>
    <p><?= $post['requirements'] ?></p>
    <address><?= $post['location'] ?></address>
    <time>
        <?php
        if (isset($post['publish_date'])) {
            echo $post['publish_date'];
        }
        ?>
    </time>
</div>