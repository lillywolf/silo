import EmailSignup from "../components/EmailSignup";

export default function Contact() {
    return (
        <div className='email-signup w-full bg-[#0d0d0d] h-screen pt-8'>
            <div className='xs:w-[300px] sm:w-[400px] m-auto'>
                <EmailSignup />
            </div>
        </div>
    );
}