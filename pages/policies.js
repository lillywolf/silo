import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Policies() {
    return (
        <>
            <title>SILO Brooklyn Policies</title>
            <div className='relative w-2/3 mt-40 min-h-screen mx-auto text-lg policies'>
                <p className="prompt"><b>SAFER SPACES STATEMENT</b></p>
                <div className='mt-4'>
                    <p>We have zero tolerance for violence, racism, transphobia, sexism or other discriminatory language or actions. This includes staring at others or blocking their ability to move freely. Physical contact always requires consent.</p>
                    <p>Please do not use your cell phone or take photos when you&apos;re on or around the dance floor. If you need to use your phone just step away to the bar or another area in the space. Please also refrain from yapping on the dance floor.</p>
                    <p>If anyone or anything makes you feel unsafe while you&apos;re inside, talk to any staff-member and they will help you.</p>
                    <p>In essence, be respectful and be kind.</p>
                </div>

                <div className='mt-8 prompt'><b>PACBI STATEMENT</b></div>
                <div className='mt-4'>
                    <p>We endorse the Palestinian Campaign for the Academic and Cultural Boycott of Israel (<span className="newsletter-link"><Link className="newsletter-link" target="_blank" href="https://bdsmovement.net/pacbi/cultural-boycott-guidelines">PACBI</Link></span>) and pledge to boycott all institutions and funders complicit in the Israeli occupation.</p>
                    <br/>
                    <p>SILO Brooklyn vows to:</p>
                    <ul>
                        <li className='ml-4'>&bull; boycott any cultural product or event funded, commissioned, and/or sponsored by an official Israeli body.</li>
                        <li className='ml-4'>&bull; not collaborate with or take money from Israeli institutions.</li>
                        <li className='ml-4'>&bull; advocate for others to similarly divest from Israel, end support for the oppression of Palestinians, and pressure Israel to comply with international law.</li>
                    </ul>
                    <br/>
                    <p>PACBI rejects on principle boycotts of individuals based on their identity (such as citizenship, race, gender, sexuality, or religion) or opinion. Mere affiliation of Israeli cultural workers to an Israeli cultural institution is therefore not grounds for boycott. If, however, an individual is representing the state of Israel or a complicit Israeli institution, or is commissioned/recruited to participate in Israel&apos;s efforts to “rebrand” itself, then their activities are subject to this institutional boycott the PACBI movement is calling for.</p>
                    <br/>
                    <div className="newsletter-link"><Link target="_blank" href="https://www.writersagainstthewarongaza.com/pacbi">Writers Against the War on Gaza: PACBI FAQ</Link></div>
                </div>
            </div>
        </>
    );
}
