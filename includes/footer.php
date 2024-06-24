<footer class="bg-white">
    <div class="container mx-auto p-4 sm:px-6">
        <div class="w-full md:flex md:items-center md:justify-between gap-4">
            <div class="flex items-center py-2">
                <?php include './src/logo.php'; ?>
            </div>
            <ul class="flex flex-wrap gap-x-4 sm:gap-x-6 items-center">
                <li><a href="/about" class="hover:underline">About</a></li>
                <li><a href="/contact" class="hover:underline">Contact</a></li>
                <li><a href="/privacy-policy" class="hover:underline">Privacy Policy</a></li>
                <li><a href="/terms" class="hover:underline">Terms &amp; Conditions</a></li>
            </ul>
        </div>
    </div>
    <div class="container mx-auto p-4 sm:px-6">
        <div class="w-full md:flex md:items-center md:justify-between gap-4">
            <p class="sm:text-center">© 2023 Santo. All Rights Reserved.</p>
            <?php include './src/components/social.php'; ?>
        </div>
    </div>
</footer>