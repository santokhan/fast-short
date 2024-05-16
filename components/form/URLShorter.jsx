'use client'

import checkAlias from '@/actions/query/checkAlias'
import createURL from '@/actions/query/createURL'
import shortenUrlToId from '@/lib/shorter/shortid'
import React, { useState } from 'react'
import placeholder from './shorter-form/placeholder'
import { useRouter } from 'next/navigation'
import { storeToLocal } from '@/lib/local-storage/localStorage'
import SubmitButton from './shorter-form/SubmitButton'
import { twMerge } from 'tailwind-merge'
import DomainSelect from './shorter-form/SelectDomain'
import FormTitle from '@/components/form/FormTitle'
import { useSession } from 'next-auth/react'

const UrlShorterForm = () => {
    const [url, setUrl] = useState('')
    const [domain, setDomain] = useState('fastshort.xyz')
    const [alias, setAlias] = useState('')
    const [error, setError] = useState({})
    const [loading, setLoading] = useState(false)
    const router = useRouter()
    const { data } = useSession()

    const handleSubmit = async (e) => {
        e.preventDefault()

        const author = data?.user?.email || ''

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

                            router.push(`/generating/${alias}`)
                        }
                    }
                } catch (error) {
                    console.error(error)
                }
            } else {
                setLoading(true)

                // Shorten the URL to a unique ID
                try {
                    const shortenedId = shortenUrlToId(url)

                    const res = await createURL({ url, domain, shortenedId, alias: '', author })

                    if (res) {
                        setLoading(false)

                        setUrl('')
                        setAlias('')

                        storeToLocal(res)

                        router.push(`/generating/${shortenedId}`)
                    }
                } catch (err) {
                    console.error(err)
                }
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
            <FormTitle>Shorten a long URL</FormTitle>
            <form onSubmit={handleSubmit} className='flex flex-wrap gap-6'>
                <label className='w-full flex flex-col items-start'>
                    <input
                        type='url'
                        name='url'
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
    )
}

export default UrlShorterForm
