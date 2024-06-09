const processUrl = (url) => {
    if (url.startsWith('http://')) {
        return url
    } else if (url.startsWith('https://')) {
        return url
    } else {
        return `https://${url}`
    }
}

// Example
const longUrl = 'example.com/very/long/url/to/be/shortened';
const shortUrl = processUrl(longUrl);
console.log('Shortened URL:', shortUrl);

// export default processUrl