import Nav from '../components/Nav'
import Footer from '../components/Footer'
import MobileNav from '../components/MobileNav'

export default function Contact() {
    return (
        <div className='mt-32 w-9/12 text-s mx-auto lg:w-6/12'>
            <div className='relative mt-16 ml-5 lg:ml-16 lg:mt-28'>
                <p>For booking inquiries:</p>
                <a href="mailto:booking@silobrooklyn.com" className='underline'>BOOKING@SILOBROOKLYN.COM</a>
                <p className='mt-4'>For all others:</p>
                <a href="mailto:contact@silobrooklyn.com" className='underline'>CONTACT@SILOBROOKLYN.COM</a>
                <br></br>
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
                <p>2x Technics 1200 turntables</p>
            </div>
        </div>
    );
}
