<?php
include './includes/job_cards_data.php';
include './src/utils/findItemById.php';

$job_id = $_GET['id'];

$post = findItemById($job_posts, $job_id);

if (!isset($post)) {
    return "";
}

$details = $post['description'];
?>

<div class="max-w-screen-xl mx-auto px-4 py-16 space-y-6">
    <img src="<?= $post['src'] ?>" alt="post" class="w-full aspect-video object-cover rounded-xl" width="640" height="460">
    <div class="flex flex-wrap gap-1">
        <?php
        foreach (['ui', 'job', 'freelance', 'outsource', 'web'] as $key => $value) {
        ?>
            <span class="text-sm font-medium text-gray-500 border rounded-full py-1 px-3"><?= $value ?></span>
        <?php
        }
        ?>
    </div>
    <h1 class="text-3xl font-bold"><?= $post['title'] ?></h1>
    <p class="whitespace-pre-wrap"><?= $details ?></p>

    <div class="">
        <p class="">
            <?php
            if (isset($post['author'])) {
                foreach ($post['author'] as $key => $value) {
                    echo 'Author ' . $key . ': ' . $value . "<br/>";
                }
            }
            ?>
        </p>
        <p>
            <?php
            if (isset($post['publish_date'])) {
                echo 'Published on ' . $post['publish_date'];
            }
            ?>
        </p>
    </div>
    <address><?= $post['location'] ?></address>
    <time>
        <?php
        if (isset($post['publish_date'])) {
            echo $post['publish_date'];
        }
        ?>
    </time>
</div>
<div class="max-w-screen-xl mx-auto px-4">
    <hr class="">
</div>
<div class="max-w-screen-xl mx-auto px-4 py-16 ">
    <?php
    include './includes/job_cards_on_job.php';
    ?>
</div>