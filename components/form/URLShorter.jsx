'use client'

import shortenUrlToId from '@/lib/shorter/shortid'
import React, { useState } from 'react'

const DomainSelect = ({ value, onChange }) => {
    const domains = [{ value: 'fastshort.xyz' }]
    return (
        <select
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className='block px-4 py-4 w-full rounded-lg bg-gray-50'
            placeholder='Domain'
        >
            {domains.map((domain) => (
                <option key={domain.value} value={domain.value}>
                    {domain.value}
                </option>
            ))}
        </select>
    )
}

const UrlShorterForm = () => {
    const [url, setUrl] = useState('')
    const [domain, setDomain] = useState('fastshort.xyz')
    const [alias, setAlias] = useState('')

    function createWithAlias(url, domain, alias) {
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

    function createWithUniqueId(url, domain) {
        console.log(url, domain)
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

    const handleSubmit = (e) => {
        e.preventDefault()

        if (url) {
            if (alias) {
                createWithAlias(url, domain, alias)
            } else {
                createWithUniqueId(url, domain)
            }
        } else {
        }
    }

    return (
        <div className='p-6 lg:p-8 rounded-xl bg-white space-y-6 mx-auto max-w-2xl'>
            <h1 className='text-3xl font-bold text-center'>Shorten a long URL</h1>
            <form onSubmit={handleSubmit} className='flex flex-wrap gap-6'>
                <label className='w-full flex flex-col items-start'>
                    <input
                        type='url'
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
                        className='block px-4 py-4 w-full rounded-lg bg-gray-50'
                        placeholder='URL'
                        required
                    />
                </label>
                <label className='flex-1'>
                    <DomainSelect
                        value={domain}
                        onChange={(value) => setDomain(value)}
                        className='block px-4 py-4 w-full rounded-lg bg-gray-50'
                    />
                </label>
                <label className='flex-1'>
                    <input
                        type='text'
                        value={alias}
                        onChange={(e) => setAlias(e.target.value)}
                        className='block px-4 py-4 w-full rounded-lg bg-gray-50'
                        placeholder='Alias (optional)'
                    />
                </label>
                <button type='submit' className='px-6 py-4 rounded-lg w-full bg-button text-white font-bold'>
                    Shorten URL
                </button>
            </form>
        </div>
    )
}

export default UrlShorterForm
