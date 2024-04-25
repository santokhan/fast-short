import { twMerge } from 'tailwind-merge'

const Container = ({ children, className = '' }) => {
  return <section className={twMerge('mx-auto max-w-screen-xl px-4', className)}>{children}</section>
}

export default Container
