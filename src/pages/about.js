import Image from 'next/image';
import avatar from './assets/Avatar.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import CodeStastic from './widgets/CodeStastic/CodeStastic';

const SocialLink = ({icon, link, text}) => {
  return (
    <a className='block text-base' href={link} target='_blank'>
      <button className='p-1 rounded-md hover:bg-cold/50 hover:text-white'>
        <FontAwesomeIcon className='text-sea' icon={icon}/>
        <span className='ml-2 underlline'>{text}</span>
      </button>
    </a>
  )
}

const SectionTitle = ({children}) => (
  <h1 className='font-medium text-xl'>
    <span className='inner-border pb-1.5'>
      {children}
    </span>
  </h1>
)

export default function About() {
  return (
    <div className='flex flex-col mx-auto max-w-lg space-y-4'>
      <section className='flex flex-row flex-1 justify-between border-gray border-b-8 border-solid py-6'>
        <div className='flex flex-col justify-center'>
          <h1 className='text-4xl font-bold capitalize first-letter:text-sea'>xmccc</h1>
          <p className='text-sm font-light'>
            前端开发/手动挡司机/咖啡入门
          </p>
        </div>
        <div
    className='relative h-fit w-fit rounded-full before:pseudo-spin-content'
        >
          <Image
    className='w-28 h-28 p-4 rounded-full'
            alt="xmcx3's avatar"
            src={avatar} />
        </div>
      </section>
      <section className='flex flex-col'>
        <SectionTitle>LeetCode</SectionTitle>
        <CodeStastic className='text-gray self-center py-8' />
      </section>
      <section className='flex flex-col'>
        <SectionTitle>On the web</SectionTitle>
        <div className='self-center py-8'>
          <SocialLink icon={faGithub} link="https://github.com/xmcx3" text='xmcx3'/>
          <SocialLink icon={faEnvelope} link="mailto:xmc2013v@gmail.com" text='xmc2013v@gmail.com'/>
        </div>
      </section>
    </div>
  )
}
