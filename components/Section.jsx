import { twMerge } from 'tailwind-merge'
import Container from './Container'

const Section = ({ children, className = '' }) => {
  return <Container className={twMerge('py-12 lg:py-20', className)}>{children}</Container>
}

export default Section
