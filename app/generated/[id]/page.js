'use server';

import getURL from '@/actions/query/getURL';
import NavbarSpace from '@/components/NavbarSpace'
import Section from '@/components/Section'
import CopyButton from '@/components/button/CopyButton';

export default async function GeneratedPage({ params }) {
  if (params && params.id) {
    const id = params.id || ""
    const path = '/' + id

    const res = await getURL(id)

    if (res) {
      return (
        <main className='min-h-screen'>
          <NavbarSpace />
          <Section>
            <div className='mx-auto max-w-md'>
              <div
                className='relative flex max-w-lg flex-col overflow-y-auto rounded-lg bg-white px-4 py-10 text-center transition-opacity duration-300 dark:bg-navy-700 sm:px-5'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='mx-auto inline h-28 w-28 shrink-0 text-button'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
                  />
                </svg>
                <div className='mt-4 flex flex-col items-center'>
                  <h2 className='text-2xl text-slate-700 dark:text-navy-100'>Here is the shorter URL</h2>
                  <p className='mt-2'>
                    You can easily copy it by clicking the copy button
                  </p>
                  {
                    res.URL &&
                    <div className='flex items-center gap-2 mt-6'>
                      <div className="px-4 py-3 bg-gray-50 flex items-center rounded-lg w-full max-w-[268px]">
                        <p className='overflow-x-hidden whitespace-nowrap'>{res.URL || ""}</p>...
                      </div>
                      <CopyButton url={path} />
                    </div>
                  }
                </div>
              </div>
            </div>
          </Section>
        </main>
      )
    } else {
      return (
        <main className='min-h-screen'>
          <NavbarSpace />
          <Section>
            <p>Something went wrong!</p>
          </Section>
        </main>
      )
    }
  } else {
    return (
      <main className='min-h-screen'>
        <NavbarSpace />
        <Section>
          <p>Something went wrong!</p>
        </Section>
      </main>
    )
  }
}
