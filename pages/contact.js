import Nav from '../components/Nav'
import Footer from '../components/Footer'
import MobileNav from '../components/MobileNav'

export default function Contact() {
    return (
        <div className='absolute w-full h-screen top-0 left-0 bg-[#eeeeeeff]'>
            <div className='relative mt-16 ml-5 lg:ml-16 lg:mt-28'>
                <p>For booking inquiries:</p>
                <a href="mailto:booking@silobrooklyn.com" className='underline'>BOOKING@SILOBROOKLYN.COM</a>
                <p className='mt-4'>For all others:</p>
                <a href="mailto:contact@silobrooklyn.com" className='underline'>CONTACT@SILOBROOKLYN.COM</a>
            </div>
        </div>
    );
}
