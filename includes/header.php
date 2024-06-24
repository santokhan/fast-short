<nav class="sticky top-0 z-[2] flex h-16 w-full items-center transition-colors duration-200 bg-white">
    <div class="flex flex-1 items-center justify-between px-4 h-full container w-full mx-auto">
        <div class="flex items-center">
            <?php include './src/logo.php'; ?>
        </div>
        <div class="">
            <ul class="flex-row gap-2 justify-center hidden lg:flex">
                <li><a href="/about" class="py-2.5 px-4 rounded-full font-semibold text-secondary-900 hover:underline decoration-2 underline-offset-4"><span class="whitespace-nowrap">About</span></a></li>
                <li><a href="/contact" class="py-2.5 px-4 rounded-full font-semibold text-secondary-900 hover:underline decoration-2 underline-offset-4"><span class="whitespace-nowrap">Contact</span></a></li>
            </ul>
            <div class="flex items-center justify-center lg:hidden">
                <button type="button" class="text-secondary-900" title="Toggle">
                    <?php include './src/icons/hamburger.php'; ?>
                </button>
            </div>
        </div>
    </div>
</nav>