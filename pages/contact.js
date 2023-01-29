import Nav from '../components/Nav'
import Footer from '../components/Footer'
import MobileNav from '../components/MobileNav'

export default function Contact() {
    return (
        <>
            <title>SILO Brooklyn Contact</title>
            <div className='absolute w-full mt-12 text-xl text-center mx-auto'>
                <div className='relative mt-16 lg:mt-28'>
                    <p>for booking inquiries:</p>
                    <a href="mailto:booking@silobrooklyn.com" className='underline'>booking@silobrooklyn.com</a>
                    <p>for lost and found:</p>
                    <a href="mailto:lostandfound@silobrooklyn.com" className='underline'>lostandfound@silobrooklyn.com</a>
                    <p>for accessibility requests:</p>
                    <a href="mailto:a11y@silobrooklyn.com" className='underline'>a11y@silobrooklyn.com</a>
                    <p className='mt-4'>for all others:</p>
                    <a href="mailto:contact@silobrooklyn.com" className='underline'>contact@silobrooklyn.com</a>
                    {/* <br></br>
                    <br></br>
                    <br></br>
                    <p>BACKLINE</p>
                    <br></br>
                    <p>Sound:</p>
                    <p>2x Danley BC218 subwoofers</p>
                    <p>2x Danley SH96HO mains</p>
                    <p>2x Danley SH46 rear fills</p>
                    <p>2x DNA 20K4 PRO amplifier</p>
                    <br></br>
                    <p>DJ:</p>
                    <p>4x CDJ 3000s</p>
                    <p>Pioneer DJM-V10</p>
                    <p>2x Technics 1200 turntables</p> */}
                </div>
            </div>
        </>
    );
}
