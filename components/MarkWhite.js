import Image from 'next/image'

export default function MarkWhite() {
  return (
    <div className='bg-[#0d0d0d] h-full w-full'>
      <Image src='/mark_white.svg' layout='fill' objectFit='contain'/>
    </div>
  );
}