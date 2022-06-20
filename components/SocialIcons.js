import Image from 'next/image'

export default function SocialIcons() {
    return (
        <div className='flex-col block h-12 opacity-90'>
            <div className='relative inline-block h-7 w-7 mr-6 mt-2'>
                <a href="http://twitter.com/silobrooklyn"><Image src='/twitter-white.svg' layout='fill'/></a>
            </div>
            <div className='relative block h-7 w-7 mr-6 mt-2'>
                <a className='block' href="http://instagram.com/silobrooklyn"><Image src='/instagram-white.svg' layout='fill'/></a>
            </div>
            <div className='relative block h-7 w-7 mr-6 mt-2'>
                <a href="http://soundcloud.com/silo-brooklyn"><Image src='/soundcloud-white.svg' layout='fill'/></a>
            </div>
        </div>
    );
}
