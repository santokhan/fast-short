'use server';

import getURL from '@/actions/query/getURL';
import NavbarSpace from '@/components/NavbarSpace'
import RedirectButton from '@/components/RedirectButton';
import Section from '@/components/Section'
import CopyButton from '@/components/button/CopyButton';
import { adsURL } from '@/components/form/shorter-form/domains';
import { ArrowUp } from 'iconsax-react';
import Link from 'next/link';

export default async function GeneratedPage({ params }) {
  if (params && params.id) {
    const id = params.id || "";
    const path = '/' + id;

    if (!id) {
      return null;
    } else {
      const decodedHash = decodeURIComponent(id);

      const res = await getURL(decodedHash)

      if (res) {
        const realURL = res?.URL || ""
        const URLWithHash = adsURL[0] + '?hash=' + (res.alias || res.hash);

        return (
          <main className='min-h-screen'>
            <NavbarSpace />
            <Section>
              <div className='mx-auto max-w-2xl'>
                <div
                  className='w-full overflow-x-hidden relative flex flex-col rounded-lg bg-white px-4 py-10 text-center transition-opacity duration-300 sm:px-5'
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
                    <h2 className='text-2xl text-slate-700'>Here is the shorter URL</h2>
                    <p className='mt-2'>
                      You can easily copy it by clicking the copy button
                    </p>

                    <div className='flex items-center gap-2 mt-6'>
                      <div className="px-4 py-3 bg-gray-50 flex items-center rounded-lg w-full max-w-lg">
                        <p className='w-full overflow-x-hidden text-ellipsis whitespace-nowrap'>{URLWithHash}</p>
                      </div>
                      <CopyButton url={URLWithHash} />
                      <RedirectButton redirectURL={URLWithHash} />
                    </div>
                  </div>
                  <p className='mt-6'><Link href="/" className='text-gray-400 hover:underline'>Back to Home</Link></p>
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
              <p className='text-center bg-white rounded-lg p-4 text-red-800'>❌ The URL not found on database</p>
            </Section>
          </main>
        )
      }
    }
  } else {
    return (
      <main className='min-h-screen'>
        <NavbarSpace />
        <Section>
          <p className='text-center bg-white rounded-lg p-4 text-red-800'>❌ Can not read the [id] from query parameters</p>
        </Section>
      </main>
    )
  }
}
