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
?>

<div class="flex flex-wrap items-stretch -mx-4 mt-4">
    <?php foreach ($job_posts as $post) : ?>
        <article id="post-<?= get_post_data($post, 'id'); ?>" class="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
            <div class="bg-white shadow-md rounded-md p-4 lg:p-6 h-full">
                <div class="grid grid-cols-1 gap-4">
                    <h2 class="text-xl font-semibold">
                        <a href="<?= get_post_data($post, 'id'); ?>" class="text-blue-500 hover:underline">
                            <?= get_post_data($post, 'title'); ?>
                        </a>
                    </h2>
                    <p><?= get_post_data($post, 'description'); ?></p>
                    <div class="flex items-center space-x-2 text-gray-500 text-sm">
                        <span class="">
                            Posted by < href="<?= get_post_data($post, 'author_url'); ?>" class="text-gray-700">
                                <?= get_post_data($post, 'author'); ?>
                            </>
                        </span>
                        <span class="">/</span>
                        <span class="whitespace-nowrap">
                            Published on <?= get_post_data($post, 'publish_date'); ?>
                        </span>
                    </div>
                </div>
            </div>
        </article>
    <?php endforeach; ?>
</div>