'use client'

import checkAlias from '@/actions/checkAlias'
import storeURLAlias from '@/actions/storeURLAlias'
import storeURLHash from '@/actions/storeURLHash'
import shortenUrlToId from '@/lib/shorter/shortid'
import React, { useState } from 'react'
import placeholder from './shorter-form/placeholder'
import domains from './shorter-form/domains'
import { redirect } from 'next/navigation'
import { storeToLocal } from '@/lib/local-storage/localStorage'
import SubmitButton from './shorter-form/SubmitButton'
import { twMerge } from 'tailwind-merge'

const DomainSelect = ({ value, onChange }) => {
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
    const [error, setError] = useState({})

    const [loading, setLoading] = useState(false)

    function createWithAlias(url, domain, alias) {
        // Check existance of alias
        if (!url || !domain || !alias) {
            console.error('Invalid parameters provided to createWithAlias')
            return
        } else {
            setLoading(true)

            checkAlias(domain, alias)
                .then((result) => {
                    if (result) {
                        setError((prev) => {
                            setLoading(false)
                            return { ...prev, alias: 'Alias already exists' }
                        })
                    } else {
                        // Create new Docuemnt if the Alas not exists
                        storeURLAlias(url, domain, alias)
                            .then((res) => {
                                setLoading(false)

                                setUrl('')
                                // setDomain('fastshort.xyz')
                                setAlias('')

                                storeToLocal(res)

                                redirect('/generating/' + alias)
                            })
                            .catch((err) => {
                                console.error(err)
                            })
                    }
                })
                .catch((err) => {
                    console.error(err)
                })
        }

        console.log(url, alias)
    }

    function createWithUniqueId(url, domain) {
        // Check for null or undefined parameters
        if (!url || !domain) {
            console.error('Invalid parameters provided to createWithUniqueId')
            return
        } else {
            setLoading(true)

            // Shorten the URL to a unique ID
            try {
                const shortenedId = shortenUrlToId(url)

                // Construct the indentifier
                const indentifier = domain + '/' + shortenedId

                // Do something with the form data (e.g. submit to server)
                console.log(url, indentifier)

                storeURLHash(url, domain, shortenedId)
                    .then((res) => {
                        setLoading(false)

                        setUrl('')
                        // setDomain('fastshort.xyz')
                        setAlias('')

                        storeToLocal(res)

                        redirect('/generating/' + alias)
                    })
                    .catch((err) => {
                        console.error(err)
                    })
            } catch (err) {
                console.error(`Error in createWithUniqueId: ${err.message}`)
                return
            }
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (url && domain) {
            if (alias) {
                createWithAlias(url, domain, alias)
            } else {
                createWithUniqueId(url, domain)
            }
        }
    }

    function setFormValue(key, value = '') {
        if (key) {
            //
            setError({})
        }
    }

    const inputStyle = `block px-4 py-4 w-full rounded-lg bg-gray-50`

    return (
        <div className='p-6 lg:p-8 rounded-xl bg-white space-y-6 mx-auto max-w-2xl'>
            <h1 className='text-3xl font-bold text-center'>Shorten a long URL</h1>
            <form onSubmit={handleSubmit} className='flex flex-wrap gap-6'>
                <label className='w-full flex flex-col items-start'>
                    <input
                        type='url'
                        value={url}
                        onChange={(e) => {
                            setUrl(e.target.value)
                            setError({})
                        }}
                        className={twMerge(inputStyle)}
                        placeholder={placeholder.url}
                        required
                    />
                </label>
                <label className='flex-1'>
                    <DomainSelect
                        value={domain}
                        onChange={(value) => {
                            setDomain(value)
                            setError({})
                        }}
                        className={twMerge(inputStyle)}
                    />
                </label>
                <label className='flex-1'>
                    <input
                        type='text'
                        value={alias}
                        onChange={(e) => {
                            setAlias(e.target.value)
                            setError({})
                        }}
                        className={twMerge(inputStyle)}
                        placeholder={placeholder.alias}
                    />
                    {error.alias && <p className='text-red-500'>{error.alias}</p>}
                </label>
                <SubmitButton loading={loading} />
            </form>
        </div>
    )
}

export default UrlShorterForm
