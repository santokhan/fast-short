<?php
include './src/components/styles.php';
?>

<div class="min-h-screen">
    <section class="max-w-2xl px-4 mx-auto mt-12">
        <div class="max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
            <h1 class="text-3xl font-bold text-gray-800 mb-6 text-center">Contact Us</h1>
            <div class="bg-white shadow-md rounded-lg p-4 lg:p-6 mb-4">
                <h2 class="text-xl font-bold text-gray-800 mb-4">Get in Touch</h2>
                <form action="#" method="POST">
                    <div class="mb-4">
                        <label for="name" class="block text-gray-700 text-sm font-bold mb-2">Your Name</label>
                        <input type="text" id="name" name="name" placeholder="Enter your name" class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                    </div>
                    <div class="mb-4">
                        <label for="email" class="block text-gray-700 text-sm font-bold mb-2">Your Email</label>
                        <input type="email" id="email" name="email" placeholder="Enter your email" class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                    </div>
                    <div class="mb-6">
                        <label for="message" class="block text-gray-700 text-sm font-bold mb-2">Message</label>
                        <textarea id="message" name="message" rows="4" class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Enter your message"></textarea>
                    </div>
                    <div class="flex items-center justify-between">
                        <button type="submit" class="<?= $styleButton ?>">Submit</button>
                    </div>
                </form>
            </div>

            <div class="bg-white shadow-md rounded-lg p-4 lg:p-6 mb-4">
                <h2 class="text-xl font-bold text-gray-800 mb-4">Contact Information</h2>
                <p class="text-gray-700 mb-2"><strong>Email:</strong> <a href="mailto:1xshort.com@gmail.com" class="hover:underline">1xshort.com@gmail.com</a></p>
                <p class="text-gray-700 mb-2"><strong>Phone:</strong> <a href="tel:+971542130872" class="hover:underline">+971542130872</a></p>
                <p class="text-gray-700 mb-2"><strong>Address:</strong> Dhaka, Bangladesh</p>
                <?php include './src/components/social.php'; ?>
            </div>
        </div>
    </section>
    <?php include './src/adsense-ads/multiple-ads.php'; ?>
</div>