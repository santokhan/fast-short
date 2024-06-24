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
// $url = get_post_data($post, 'id');
?>

<div class="flex flex-wrap items-stretch gap-6 mt-8">
    <?php foreach ($job_posts as $post) : ?>
        <article id="post-<?= $post['id'] ?>" class="w-full md:w-5/12 flex-grow">
            <div class="bg-white shadow-md rounded-md p-4 lg:p-6 h-full">
                <div class="flex flex-col h-full gap-4">
                    <a class="" href="<?= $url . $post['id'] ?>">
                        <img src="https://picsum.photos/200/300" alt="post" class="w-full aspect-video">
                    </a>
                    <h2 class="text-2xl font-semibold">
                        <a href="<?= $url . $post['id'] ?>" class="text-gray-800 hover:underline">
                            <?= get_post_data($post, 'title'); ?>
                        </a>
                    </h2>
                    <div class="flex flex-wrap gap-2">
                        <span class="text-sm font-medium text-gray-500 border rounded-full py-1 px-2"># For Sale</span>
                        <span class="text-sm font-medium text-gray-500 border rounded-full py-1 px-2"># House</span>
                        <span class="text-sm font-medium text-gray-500 border rounded-full py-1 px-2"># Realton</span>
                        <span class="text-sm font-medium text-gray-500 border rounded-full py-1 px-2"># Apartments</span>
                    </div>
                    <p class="h-full"><?= get_post_data($post, 'description'); ?></p>
                    <div class="flex items-center space-x-2 text-gray-500 text-sm">
                        <?php
                        // Check if the 'author' key exists in the $post array
                        if (isset($post['author'])) {
                            // echo 'Posted by ' + get_post_data($post, 'author') + '/';
                            // Assuming 'get_post_data()' returns the author's name
                            echo 'Posted by ' . get_post_data($post, 'author') . '/';
                        }
                        ?>
                        <?php
                        // Check if the 'publish_date' key exists in the $post array
                        if (isset($post['publish_date'])) {
                            // Assuming 'get_post_data()' returns the publish date
                            echo 'Published on ' . get_post_data($post, 'publish_date');
                        }
                        ?>
                    </div>
                </div>
            </div>
        </article>
    <?php endforeach; ?>
</div>