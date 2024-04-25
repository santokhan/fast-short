const crypto = require('crypto');

// Function to shorten a URL to a unique ID
function shortenUrlToId(longUrl) {
    // Generate a SHA-256 hash of the URL
    const hash = crypto.createHash('sha256').update(longUrl).digest('base64');

    // Use the first 8 characters of the hash as the unique ID
    const shortId = hash.substring(0, 8);

    return shortId;
}

export default shortenUrlToId;

// Example usage:
// const longUrl = 'https://example.com/very/long/url/to/be/shortened';
// const shortId = shortenUrlToId(longUrl);

// console.log('Shortened ID:', shortId);
