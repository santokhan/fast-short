function shortWithAlias(url, domain, alias) {
    // Check existance of alias
    if (!url || !domain || !alias) {
        console.error('Invalid parameters provided to createWithAlias')
        return
    }

    // fetch(`${window.API_URL}/api/alias/${alias}`)
    //     .then((res) => {
    //         if (!res.ok) {
    //             throw new Error(`Failed to fetch: ${res.statusText}`);
    //         }
    //         return res.json();
    //     })
    //     .then((data) => {
    //         if (data.exists) {
    //             alert(`Alias ${alias} already exists`)
    //             return
    //         }
    //     })
    //     .catch((err) => {
    //         console.error(`Error in createWithAlias: ${err.message}`);
    //     })

    console.log(url, alias)
}

function shortWithUniqueId(url, domain) {
    // Check for null or undefined parameters
    if (!url || !domain) {
        console.error('Invalid parameters provided to createWithUniqueId')
        return
    }

    // Shorten the URL to a unique ID
    try {
        const shortenedId = shortenUrlToId(url)

        // Construct the indentifier
        const indentifier = domain + '/' + shortenedId

        // Do something with the form data (e.g. submit to server)
        console.log(url, indentifier)
    } catch (err) {
        console.error(`Error in createWithUniqueId: ${err.message}`)
        return
    }
}

export { shortWithAlias, shortWithUniqueId }