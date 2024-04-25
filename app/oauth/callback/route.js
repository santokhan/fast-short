export default function handler(req, res) {
    // Retrieve the authorization code from the URL parameters
    const { code } = req.query;

    // Handle the authorization code here
    // For example, you can exchange it for an access token

    // Send the response back to the client
    res.status(200).json({ message: 'Authorization successful' });
}