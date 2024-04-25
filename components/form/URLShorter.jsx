'use client'

import React, { useState } from 'react'

const DomainSelect = ({ value, onChange }) => {
  const domains = [{ value: 'fastshort', label: 'fastshort.xyz' }]

  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className='block px-4 py-4 w-full rounded-lg bg-gray-50'
      placeholder='Domain'
    >
      {domains.map((domain) => (
        <option key={domain.value} value={domain.value}>
          {domain.label}
        </option>
      ))}
    </select>
  )
}

const UrlShorterForm = () => {
  const [url, setUrl] = useState('')
  const [domain, setDomain] = useState('')
  const [alias, setAlias] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    // Do something with the form data (e.g. submit to server)
    console.log(url, domain, alias)
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
