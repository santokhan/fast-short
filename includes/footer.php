<?php
include './src/utils/navs.php';
?>

<footer class="bg-white">
    <div class="container mx-auto px-4 sm:px-6 py-12">
        <div class="w-full flex flex-wrap md:items-start gap-8">
            <div class="basis-80 flex-grow flex-shrink-0">
                <div class=""><?php include './src/logo.php'; ?></div>
                <div class="mt-8">
                    <?php include './src/components/social.php'; ?>
                </div>
            </div>

            <ul class="basis-80 flex-grow flex-shrink-0">
                <h5 class="text-lg mb-4 font-bold">Resources</h5>
                <div class="space-y-2">
                    <?php foreach ($menuItems as $item) : ?>
                        <li><a href="<?php echo htmlspecialchars($item['url']); ?>" class="hover:underline"><?php echo htmlspecialchars($item['label']); ?></a></li>
                    <?php endforeach; ?>
                </div>
            </ul>
            <ul class="basis-80 flex-grow flex-shrink-0">
                <h5 class="text-lg mb-4 font-bold">Others</h5>
                <div class="space-y-2">
                    <?php foreach ($resources_navs as $item) : ?>
                        <li><a href="<?php echo htmlspecialchars($item['url']); ?>" class="hover:underline"><?php echo htmlspecialchars($item['label']); ?></a></li>
                    <?php endforeach; ?>
                </div>
            </ul>
        </div>
    </div>
    <div class="container mx-auto p-4 sm:px-6">
        <p class="text-center">© 2023 Santo. All Rights Reserved.</p>
    </div>
</footer>