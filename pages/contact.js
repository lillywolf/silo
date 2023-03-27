import Nav from '../components/Nav'
import Footer from '../components/Footer'
import MobileNav from '../components/MobileNav'

export default function Contact() {
    return (
        <>
            <title>SILO Brooklyn Contact</title>
            <div className='absolute w-full mt-12 text-xl text-center mx-auto'>
                <div className='relative mt-16 lg:mt-28'>
                    <p className='mt-4'>for table reservations:</p>
                    <a href="mailto:tables@silobrooklyn.com" className='underline'>tables@silobrooklyn.com</a>
                    <p className='mt-4'>for artist and public event booking:</p>
                    <a href="mailto:booking@silobrooklyn.com" className='underline'>booking@silobrooklyn.com</a>
                    <p className='mt-4'>for private event booking:</p>
                    <a href="mailto:booking@silobrooklyn.com" className='underline'>silo@thekagency.com</a>        
                    <p className='mt-4'>for lost and found:</p>
                    <a href="mailto:lostandfound@silobrooklyn.com" className='underline'>lostandfound@silobrooklyn.com</a>
                    <p className='mt-4'>for accessibility requests:</p>
                    <a href="mailto:a11y@silobrooklyn.com" className='underline'>a11y@silobrooklyn.com</a>
                    <p className='mt-4'>for all others:</p>
                    <a href="mailto:contact@silobrooklyn.com" className='underline'>contact@silobrooklyn.com</a>
                </div>
            </div>
        </>
    );
}
