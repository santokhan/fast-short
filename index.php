<!-- NGINX http://localhost:8080/ -->

<?php
$page = isset($_GET['page']) ? $_GET['page'] : 'home'; // 'home' for '' or '/'

switch ($page) {
    case 'home':
        include 'home.php';
        break;
    case 'about':
        include 'about.php';
        break;
    case 'contact':
        include 'contact.php';
        break;
    case 'services':
        include 'services.php';
        break;
    case 'products':
        include 'products.php';
        break;
    default:
        include '404.php';
        break;
}