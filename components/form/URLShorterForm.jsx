'use server'

import SubmitButton from './shorter-form/SubmitButton'
import { twMerge } from 'tailwind-merge'
import { onSubmitShortForm } from '@/actions/onSubmit'
import DomainSelect from './shorter-form/SelectDomain'
import placeholder from './shorter-form/placeholder'
import FormTitle from '@/components/form/FormTitle'

const URLShorterForm = ({ error = null }) => {
    const inputStyle = `block px-4 py-4 w-full rounded-lg bg-gray-50`

    return (
        <div className='p-6 lg:p-8 rounded-xl bg-white space-y-6 mx-auto max-w-2xl'>
            <FormTitle>Shorten a long URL</FormTitle>
            <form action={onSubmitShortForm} className='flex flex-wrap gap-6'>
                <label className='w-full flex flex-col items-start'>
                    <input
                        type='url'
                        name='url'
                        className={twMerge(inputStyle)}
                        placeholder={placeholder.url}
                        required
                    />
                </label>
                <label className='flex-1'>
                    <DomainSelect className={twMerge(inputStyle)} required={true} />
                </label>
                <label className='flex-1'>
                    <input type='text' name='alias' className={twMerge(inputStyle)} placeholder={placeholder.alias} />
                    {error.alias && (
                        <p className='text-red-500' id='error'>
                            {error.alias}
                        </p>
                    )}
                </label>
                <SubmitButton loading={false} />
            </form>
        </div>
    )
}

export default URLShorterForm
