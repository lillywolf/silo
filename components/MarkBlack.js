import Image from 'next/image'

export default function MarkBlack() {
  return (
    <div className='bg-white h-full w-full'>
      <Image src='/mark_white.svg' layout='fill' objectFit='contain'/>
    </div>
  );
}
