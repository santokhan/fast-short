import NavbarSpace from '@/components/NavbarSpace'
import Section from '@/components/Section'
import Link from 'next/link'

export default function GeneratingPage({ params }) {
  if (params && params.id) {
    const id = params.id || ""

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
                <h2 className='text-2xl text-slate-700 dark:text-navy-100'>The URL has been generated</h2>
                <p className='mt-2'>
                  Thanks you for using our services. Please click the button below to get your URL.
                </p>
                <div className>
                  <Link href={'/generated/' + id} className='flex justify-center items-center px-6 py-3 rounded-lg mt-6 bg-button font-medium text-white'>
                    Click Here to get URL
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Section>
      </main>
    )
  } else {

  }
}
