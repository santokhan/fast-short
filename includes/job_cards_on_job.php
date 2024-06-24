<?php
include './includes/job_cards_data.php';
include './src/utils/validate_string.php';
?>

<?php
function get_post_data($post = [], $key = '')
{
    if ($key && is_array($post) && isset($post[$key])) {
        $data = $post[$key];
        $valid_str = validate_string($data);
        return htmlspecialchars($valid_str);
    } else {
        return '';
    }
}

$url = "/job?id=";
?>

<div class="flex flex-wrap items-stretch gap-6 mt-8">
    <?php foreach (array_slice($job_posts, 3, 2) as $post) : ?>
        <article id="post-<?= $post['id'] ?>" class="w-full md:w-5/12 flex-grow">
            <div class="bg-white rounded-md p-4 lg:p-6 h-full">
                <div class="flex flex-col h-full gap-4">
                    <a class="" href="<?= $url . $post['id'] ?>">
                        <img src="<?= $post['src'] ?>" alt="post" class="w-full aspect-video object-cover rounded-lg" width="640" height="460">
                    </a>
                    <h2 class="text-2xl font-semibold">
                        <a href="<?= $url . $post['id'] ?>" class="text-gray-800 hover:underline">
                            <?= get_post_data($post, 'title'); ?>
                        </a>
                    </h2>
                    <div class="flex flex-wrap gap-1" title="tags">
                        <?php
                        foreach ($post['tags'] as $key => $value) {
                        ?>
                            <span class="text-sm font-medium text-gray-500 border rounded-full py-1 px-3"><?= $value ?></span>
                        <?php
                        }
                        ?>
                    </div>
                    <p class="h-full"><?= get_post_data($post, 'description'); ?></p>
                    <div class="">
                        <p class="">
                            <?php
                            if (isset($post['author'])) {
                                foreach ($post['author'] as $key => $value) {
                                    echo 'Author ' . ucfirst($key) . ': ' . $value . "<br/>";
                                }
                            }
                            ?>
                        </p>
                        <p>
                            <?php
                            // Check if the 'publish_date' key exists in the $post array
                            if (isset($post['publish_date'])) {
                                // Assuming 'get_post_data()' returns the publish date
                                echo 'Published on ' . get_post_data($post, 'publish_date');
                            }
                            ?>
                        </p>
                    </div>
                </div>
            </div>
        </article>
    <?php endforeach; ?>
</div>