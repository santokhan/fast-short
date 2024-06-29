<?php
include './src/utils/checkActive.php';

$menuItems = [
    ['url' => '/', 'label' => 'Home'],
    ['url' => '/about', 'label' => 'About'],
    ['url' => '/contact', 'label' => 'Contact'],
    ['url' => '/privacy-policy', 'label' => 'Privacy Policy'],
    ['url' => '/terms', 'label' => 'Terms & Conditions']
];
?>

<nav class="sticky top-0 z-[2] flex h-16 w-full items-center transition-colors duration-200 bg-white">
    <div class="flex flex-1 items-center justify-between px-4 h-full container w-full mx-auto">
        <div class="flex items-center">
            <?php include './src/logo.php'; ?>
        </div>
        <div class="">
            <ul class="flex-row gap-2 justify-center hidden lg:flex">
                <ul class="flex flex-wrap gap-x-4 sm:gap-x-6 items-center">
                    <?php foreach ($menuItems as $item) : ?>
                        <li><a href="<?php echo htmlspecialchars($item['url']); ?>" class="px-2 font-semibold hover:underline decoration-2 underline-offset-4 whitespace-nowrap <?= checkActive($item['url']) ? 'underline' : '' ?>"><?php echo htmlspecialchars($item['label']); ?></a></li>
                    <?php endforeach; ?>
                </ul>
            </ul>
            <div class="flex items-center justify-center lg:hidden">
                <button type="button" class="text-secondary-900" title="Toggle">
                    <?php include './src/icons/hamburger.php'; ?>
                </button>
            </div>
        </div>
    </div>
</nav>