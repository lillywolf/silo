import Image from 'next/image'

export default function SocialIcons() {
    return (
        <div className='flex-col block h-8'>
            {/* <div className='relative inline-block h-7 w-7 mr-3'>
                <a href="http://twitter.com/silobrooklyn"><Image src='/twitter.svg' layout='fill'/></a>
            </div> */}
            <div className='relative block h-8 w-8 mr-4'>
                <a className='block' href="http://instagram.com/silobrooklyn"><Image src='/instagram-white.svg' layout='fill'/></a>
            </div>
            <div className='relative block h-8 w-8 mr-4'>
                <a href="http://soundcloud.com/silo-brooklyn"><Image src='/soundcloud.svg' layout='fill'/></a>
            </div>
        </div>
    );
}
