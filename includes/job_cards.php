<?php
$job_posts = [
    [
        "id" => "3",
        "title" => "Backend Engineer at Cloud Systems Ltd.",
        "location" => "Seattle, WA",
        "description" => "Join our backend engineering team at Cloud Systems Ltd. and contribute to the development of scalable and reliable cloud infrastructure solutions. We're seeking a Backend Engineer with experience in building microservices and working with distributed systems.",
        "requirements" => "Bachelor's degree in Computer Science or related field. Proficiency in programming languages such as Python, Java, or Go. Experience with cloud platforms like AWS or Azure.",
        "apply_url" => "https://example.com/job-post-3"
    ],
    [
        "id" => "4",
        "title" => "UX/UI Designer at Creative Solutions Agency",
        "location" => "Los Angeles, CA",
        "description" => "Are you passionate about creating intuitive and visually appealing user experiences? Join our team at Creative Solutions Agency as a UX/UI Designer and collaborate with cross-functional teams to design innovative digital products.",
        "requirements" => "Bachelor's degree in Design, Human-Computer Interaction, or related field. Proficiency in design tools such as Sketch, Adobe XD, or Figma. Strong portfolio showcasing UI/UX design projects.",
        "apply_url" => "https://example.com/job-post-4"
    ],
    [
        "id" => "5",
        "title" => "DevOps Engineer at CloudTech Innovations",
        "location" => "Austin, TX",
        "description" => "CloudTech Innovations is hiring a DevOps Engineer to streamline our software development and deployment processes. If you have experience with containerization, CI/CD pipelines, and infrastructure automation, we want to hear from you!",
        "requirements" => "Bachelor's degree in Computer Science, Engineering, or equivalent experience. Proficiency in tools like Docker, Kubernetes, and Jenkins. Strong problem-solving and troubleshooting skills.",
        "apply_url" => "https://example.com/job-post-5"
    ],
    [
        "id" => "6",
        "title" => "Product Manager at Tech Solutions Group",
        "location" => "Chicago, IL",
        "description" => "Tech Solutions Group is seeking a Product Manager to drive the development and execution of our product roadmap. Collaborate with engineering, design, and marketing teams to deliver innovative solutions that meet customer needs.",
        "requirements" => "Bachelor's degree in Business, Engineering, or related field. Previous experience in product management or related roles. Strong leadership and communication skills.",
        "apply_url" => "https://example.com/job-post-6"
    ],
    [
        "id" => "7",
        "title" => "Cybersecurity Analyst at SecureTech Solutions",
        "location" => "Washington, D.C.",
        "description" => "Join our cybersecurity team at SecureTech Solutions and play a critical role in protecting our organization from cyber threats. Conduct threat analysis, vulnerability assessments, and incident response activities to safeguard our systems and data.",
        "requirements" => "Bachelor's degree in Cybersecurity, Information Technology, or related field. Experience with security tools such as SIEM, IDS/IPS, and endpoint protection. Knowledge of industry standards and best practices.",
        "apply_url" => "https://example.com/job-post-7"
    ],
    [
        "id" => "8",
        "title" => "Full Stack Developer at CodeCrafters Inc.",
        "location" => "Denver, CO",
        "description" => "CodeCrafters Inc. is looking for a Full Stack Developer to join our agile development team. Work on a variety of projects spanning frontend and backend technologies, and contribute to the entire software development lifecycle.",
        "requirements" => "Bachelor's degree in Computer Science or equivalent experience. Proficiency in programming languages such as JavaScript, Python, or Ruby. Experience with frameworks like React, Node.js, or Django.",
        "apply_url" => "https://example.com/job-post-8"
    ],
    [
        "id" => "9",
        "title" => "Mobile App Developer at AppWorks Technologies",
        "location" => "Boston, MA",
        "description" => "AppWorks Technologies is hiring a Mobile App Developer to create innovative and user-friendly mobile applications for iOS and Android platforms. Join our talented team and contribute to the development of cutting-edge mobile solutions.",
        "requirements" => "Bachelor's degree in Computer Science, Engineering, or related field. Proficiency in mobile app development languages such as Swift (for iOS) and Kotlin (for Android). Strong problem-solving skills.",
        "apply_url" => "https://example.com/job-post-9"
    ],
    [
        "id" => "10",
        "title" => "IT Support Specialist at TechCare Solutions",
        "location" => "Atlanta, GA",
        "description" => "TechCare Solutions is seeking an IT Support Specialist to provide technical assistance and support to our internal users. Troubleshoot hardware and software issues, perform system upgrades, and maintain IT documentation.",
        "requirements" => "Associate degree or technical certification in IT or related field. Experience with operating systems (Windows, macOS, Linux) and productivity software. Excellent customer service skills.",
        "apply_url" => "https://example.com/job-post-10"
    ],
];
?>


<div class="flex flex-wrap -mx-4 mt-8">
    <?php foreach ($job_posts as $post) : ?>
        <article id="post-<?php echo htmlspecialchars($post['id']); ?>" class="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
            <div class="bg-white shadow-md rounded-md p-4 lg:p-6">
                <div class="grid grid-cols-1 gap-4">
                    <h2 class="text-xl font-semibold">
                        <a href="<?php echo htmlspecialchars($post['post_url']); ?>" class="text-blue-500 hover:underline">
                            <?php echo htmlspecialchars($post['title']); ?>
                        </a>
                    </h2>
                    <header class="flex items-center space-x-2 text-gray-500 text-sm">
                        <span class="posted-by">
                            Posted by <a href="<?php echo htmlspecialchars($post['author_url']); ?>" class="text-gray-700 hover:underline">
                                <?php echo htmlspecialchars($post['author']); ?>
                            </a>
                        </span>
                        <span class="separator">/</span>
                        <span class="published">
                            Published on <?php echo htmlspecialchars($post['publish_date']); ?>
                        </span>
                    </header>
                    <div class="text-gray-700">
                        <p class="mb-4">
                            <?php echo htmlspecialchars($post['excerpt']); ?>
                        </p>
                    </div>
                </div>
            </div>
        </article>
    <?php endforeach; ?>
</div>