import Link from 'next/link'

export default function Nav() {
  const Item = ({href, name}) => (
    <Link className='hover:inner-border' href={href}>{ name }</Link>
  )
  return (
    <header className='bg-gray p-4'>
      <div className='mx-auto max-w-lg flex justify-between'>
        <div>/</div>
        <nav className='flex justify-center gap-4'>
          <Item href='/' name='Home' />
        </nav>
      </div>
    </header>
  )
}
