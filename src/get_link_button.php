<?php
require_once './src/utils/get_original_url.php';
?>

<?php
$current_hash = "";
$query = "";

if (isset($_GET["hash"])) {
    $current_hash = $_GET["hash"];
    $query = "?hash=$current_hash";
}
?>

<script>
    function getURL() {
        const API = `https://1xshort.com/get-url/`;
        const url = new URL(window.location.href);
        const searchParams = new URLSearchParams(url.search);
        const fullURL = API + '?' + searchParams.toString();

        fetch(fullURL).then(res => {
            const url = res?.url || '';
            if (url) {
                console.log(res)
                document.getElementById("getLink").href = url;
            }
        }).catch(console.error)
    }
    window.addEventListener("load", getURL);
</script>

<a href="/<?php echo $query; ?>" id="getLink" class="inline-flex items-center justify-center rounded-lg bg-blue-700 px-4 py-2.5 text-center text-base font-medium text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 flex gap-2 items-center rotate">
    <span class="whitespace-nowrap">Get link</span>
    <?php include './src/arrow_angle.php'; ?>
</a>