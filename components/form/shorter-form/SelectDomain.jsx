'use client'

import React from 'react'
import domains from './domains'

const DomainSelect = ({ value, onChange, required = false }) => {
    return (
        <select
            name='domain'
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className='block px-4 py-4 w-full rounded-lg bg-gray-50'
            placeholder='Domain'
            required={required}
        >
            {domains.map((domain) => (
                <option key={domain.value} value={domain.value}>
                    {domain.value}
                </option>
            ))}
        </select>
    )
}

export default DomainSelect
