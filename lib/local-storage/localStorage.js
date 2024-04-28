export function storeToLocal(value) {
    if (value) {
        const stringify = JSON.stringify(value)
        localStorage.setItem('URL', stringify)
    }
}

