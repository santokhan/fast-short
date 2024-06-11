For a small PHP project with 5-6 pages, using Composer is not strictly necessary, but it can still be beneficial. Composer is a dependency manager for PHP that helps manage libraries and dependencies, and it can simplify autoloading your classes.

However, if you prefer to keep things simple and do not require any external libraries, you can skip Composer. Here's a streamlined approach for a basic project setup without Composer:

### Step 1: Set Up Directory Structure
Create the project directory and a `public` directory for your PHP files.

```sh
mkdir my-php-project
cd my-php-project
mkdir public
```

### Step 2: Install PHP and Web Server
Ensure you have PHP and a web server like Apache or Nginx installed on your system. If not, follow the instructions provided in the previous response to install them.

### Step 3: Configure Apache
Create a virtual host configuration for your project as described previously. Adjust paths according to your system.

### Step 4: Create PHP Files
Create your PHP files inside the `public` directory. For example:

- `public/index.php`
- `public/about.php`
- `public/contact.php`
- `public/services.php`
- `public/products.php`

### Step 5: Basic Routing (Optional)
For a small project, you might want to implement basic routing to handle navigation between pages. Here's a simple example using an `index.php` file to manage routing:

```php
<?php
$page = isset($_GET['page']) ? $_GET['page'] : 'home';

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
```

Then, create individual files for each page (`home.php`, `about.php`, `contact.php`, etc.) in the `public` directory.

### Step 6: Access Your Project
Visit `http://localhost/index.php?page=home` to see your project. You can change the `page` parameter to navigate to different pages, like `page=about`, `page=contact`, etc.

### Example File Structure
Your project directory structure should look like this:

```
my-php-project/
├── public/
│   ├── index.php
│   ├── home.php
│   ├── about.php
│   ├── contact.php
│   ├── services.php
│   ├── products.php
│   └── 404.php
```

### Summary
- **No Composer needed**: For a small project with just a few pages, you can skip Composer unless you need external libraries.
- **Simple Routing**: Use a basic routing mechanism in `index.php` to manage page navigation.
- **Organized Files**: Keep your PHP files organized in the `public` directory.

This setup is lightweight and straightforward, perfect for small projects without the complexity of dependency management.

## Start the development server

```bash
php -S localhost:8000
```

## Command to secure copy with SSH

```bash
scp -r ./* root@216.225.203.123:/home/santokhan/1xshort/
```

