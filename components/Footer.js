import Link from 'next/link'

export default function Footer() {
    return (
        <div className='flex justify-between h-full w-full py-3 pl-6'>
            <div className='text-left inline-block pr-6'>
                <Link href="/about">
                    <a className='text-[12px] mr-4'>ABOUT</a>
                </Link>
                <Link href="/contact">
                    <a className='text-[12px] mr-4'>CONTACT</a>
                </Link>
                <Link href="/terms">
                    <a className='text-[12px] mr-4'>TERMS & CONDITIONS</a>
                </Link>
                <Link href="/privacy">
                    <a className='text-[12px] mr-4'>PRIVACY POLICY</a>
                </Link>
                <Link href="/a11y">
                    <a className='text-[12px] mr-4'>ACCESSIBILITY</a>
                </Link>
            </div>
            <div className='inline-block text-[12px] pr-6 pt-1'>
                90 SCOTT AVE BROOKLYN
            </div>
        </div>
    );
}