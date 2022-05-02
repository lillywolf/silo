export default function Contact() {
    return (
        <div className='absolute w-full h-screen top-0 bg-[#0d0d0d]'>
            <div className='relative w-full mt-10 ml-10'>
                <p>For booking inquiries:</p>
                <a href="mailto:booking@silobrooklyn.com" className='underline'>BOOKING@SILOBROOKLYN.COM</a>
                <p className='mt-4'>For all others:</p>
                <a href="mailto:contact@silobrooklyn.com" className='underline'>CONTACT@SILOBROOKLYN.COM</a>
            </div>
        </div>
    );
}
