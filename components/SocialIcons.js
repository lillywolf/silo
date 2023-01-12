import Image from 'next/image'

export default function SocialIcons() {
    return (
        <div className='block opacity-90'>
            <div className='relative inline-block h-7 w-7 mr-4'>
                <a href="http://twitter.com/silobrooklyn" label='Twitter'><Image alt="Twitter" src='/twitter-white.svg' layout='fill'/></a>
            </div>
            <div className='relative inline-block h-7 w-7 mr-4'>
                <a href="http://instagram.com/silobrooklyn" label='Instagram'><Image alt="Instagram" src='/instagram-white.svg' layout='fill'/></a>
            </div>
            <div className='relative inline-block h-7 w-7 mr-4'>
                <a href="http://soundcloud.com/silo-brooklyn" label='SoundCloud'><Image alt="SoundCloud" src='/soundcloud-white.svg' layout='fill'/></a>
            </div>
            <div className='relative inline-block h-7 w-7 mr-4'>
                <a href="https://discord.gg/kMMJZ87j9w" label='Discord'><Image alt="Discord" src='/discord-white.svg' layout='fill'/></a>
            </div>
        </div>
    );
}
