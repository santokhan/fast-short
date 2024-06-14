'use client'

import checkAlias from '@/actions/query/checkAlias'
import createURL from '@/actions/query/createURL'
import shortenUrlToId from '@/lib/shorter/shortid'
import React, { useState } from 'react'
import placeholder from './shorter-form/placeholder'
import { storeToLocal } from '@/lib/local-storage/localStorage'
import SubmitButton from './shorter-form/SubmitButton'
import { twMerge } from 'tailwind-merge'
import DomainSelect from './shorter-form/SelectDomain'
import FormTitle from '@/components/form/FormTitle'
import { useSession } from 'next-auth/react'
import CopyButton from '../button/CopyButton'
import RedirectButton from '../RedirectButton'
import { adsURL } from './shorter-form/domains'

const ShortenURL = ({ res = '' }) => {
    if (res) {
        const URLWithHash = adsURL[0] + '?hash=' + (res.alias || res.hash)

        return (
            <div className='mt-8 flex flex-col items-center border rounded-xl p-4 lg:p-8'>
                <h2 className='text-2xl text-slate-700'>Here is the shorten URL</h2>

                <div className='flex items-center flex-wrap justify-center gap-2 mt-6'>
                    <div className='px-4 py-3 bg-gray-50 flex items-center rounded-lg w-full max-w-lg'>
                        <p className='w-full overflow-x-hidden text-ellipsis whitespace-nowrap'>{URLWithHash}</p>
                    </div>
                    <CopyButton url={URLWithHash} />
                    <RedirectButton redirectURL={URLWithHash} />
                </div>
            </div>
        )
    }
}

const UrlShorterForm = () => {
    const [generated, setGenerated] = useState('')
    const [url, setUrl] = useState('')
    const [domain, setDomain] = useState('fastshort.xyz')
    const [alias, setAlias] = useState('')
    const [error, setError] = useState({})
    const [loading, setLoading] = useState(false)
    const { data } = useSession()
    const inputStyle = `block px-4 py-4 w-full rounded-lg bg-gray-50`

    const handleSubmit = async (e) => {
        e.preventDefault()

        const author = data?.user?.email || ''

        if (!url.startsWith('https://') || !url.startsWith('http://')) {
            setUrl((url) => 'https://' + url)
        }

        if (url && domain) {
            if (alias) {
                setLoading(true)

                try {
                    const isExists = await checkAlias(domain, alias)

                    if (isExists) {
                        setError((prev) => {
                            setLoading(false)
                            return { ...prev, alias: 'Alias already exists' }
                        })
                    } else {
                        const res = await createURL({ url, domain, hash: '', alias, author })

                        if (res) {
                            setLoading(false)

                            setUrl('')
                            setAlias('')

                            storeToLocal(res)

                            setGenerated(res)
                        }
                    }
                } catch (error) {
                    console.error(error)
                    setLoading(true)
                }
            } else {
                setLoading(true)

                // Shorten the URL to a unique ID
                try {
                    const shortenedId = shortenUrlToId(url + new Date().getTime())

                    const res = await createURL({
                        url,
                        domain,
                        hash: shortenedId,
                        alias: '',
                        author
                    })

                    if (res) {
                        setLoading(false)

                        setUrl('')
                        setAlias('')

                        storeToLocal(res)

                        setGenerated(res)
                    }
                } catch (err) {
                    console.error(err)
                    setLoading(true)
                }
            }
        }
    }

    return (
        <div className='mx-auto max-w-2xl'>
            <div className='p-4 lg:p-8 rounded-xl bg-white space-y-6 border'>
                <FormTitle>Shorten a long URL</FormTitle>
                <form onSubmit={handleSubmit} className='flex flex-wrap gap-6'>
                    <label className='w-full flex flex-col items-start'>
                        <input
                            type='text'
                            name='url'
                            value={url}
                            onChange={(e) => {
                                setUrl(e.target.value)
                                setError({})
                            }}
                            className={twMerge(inputStyle)}
                            placeholder={placeholder.url}
                            required
                            pattern='^[a-zA-Z0-9-]+\.[a-zA-Z]{2,}$'
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
                            required={true}
                        />
                    </label>
                    <label className='flex-1'>
                        <input
                            type='text'
                            name='alias'
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
            <ShortenURL res={generated} />
        </div>
    )
}

export default UrlShorterForm
