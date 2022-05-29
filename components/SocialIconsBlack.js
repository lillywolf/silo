import Image from 'next/image'

export default function SocialIconsWhite() {
    return (
        <div className='flex-col block h-8'>
            <div className='relative block h-6 w-6 mr-4'>
                <a className='block' href="http://instagram.com/silobrooklyn"><Image src='/instagram.svg' layout='fill'/></a>
            </div>
            <div className='relative block h-6 w-6 mr-4'>
                <a href="http://soundcloud.com/silo-brooklyn"><Image src='/soundcloud.svg' layout='fill'/></a>
            </div>
        </div>
    );
}