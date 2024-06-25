const allowDomain = [
    'localhost',
    '127.0.0.1',
    '0.0.0.0',
    '*.fastshort.xyz',
    '*.myteamjob.xyz',
];

function checker(origin, callback) {
    if (!origin) {
        // For requests that do not have an origin (like curl requests or same-origin requests)
        callback(null, true);
    } else if (allowDomain.some(domain => {
        // Construct the regular expression dynamically
        const domainRegex = new RegExp(`^(?:https?:\/\/)?${domain.replace(/\./g, '\\.').replace('*', '.*')}$`, 'i');
        return domainRegex.test(origin);
    })) {
        // Check if the request origin matches any of the allowed domains
        callback(null, true);
    } else {
        callback(new Error('Not allowed by CORS'));
    }
}

// checker("https://api.myteamjob.xyz", (err, success) => {
//     console.log(err, success)
// })

const corsOptions = {
    origin: checker
}

export default  corsOptions;
