import Link from 'next/link'
import SocialIcons from './SocialIcons';

export default function Footer() {
    return (
        <div className='justify-between h-full w-full py-2 pl-3 bg-black border-[#2b2b2b] border-t md:flex'>
            <div className='text-center w-1/3 text-[12px] leading-5 md:inline-block md:text-sm md:pr-6 md:text-left'>
                <Link href="/location">
                    <a className='mr-3 md:mr-6'>LOCATION</a>
                </Link>
                <Link href="/terms">
                    <a className='mr-3 md:mr-6'>TERMS</a>
                </Link>
                <Link href="/privacy">
                    <a className='mr-3 md:mr-6'>PRIVACY</a>
                </Link>
                <Link href="/a11y">
                    <a className='mr-3 md:mr-6'>ACCESSIBILITY</a>
                </Link>
            </div>
            <div className="w-1/3 hidden lg:block text-center">
                <SocialIcons/>
            </div>
            <div className='text-center w-1/3 text-[12px] md:inline-block md:text-right md:text-sm leading-5 pr-3'>
                90 SCOTT AVE BROOKLYN
            </div>
        </div>
    );
}