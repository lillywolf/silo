import MobileNav from "./MobileNav";
import Nav from "./Nav";
import Footer from "./Footer";

export default function Layout({ children, pathname }) {
    return (
        <div className='width-full min-h-screen'>
            <div className='absolute top-0 w-full z-10 bg-[#111111] h-12 sm:h-16 md:hidden'>
                <MobileNav />
            </div>
            <div className='hidden absolute top-0 z-10 w-full bg-[#111111] md:block md:h-[4.3rem] lg:h-25'>
                <Nav showBigLogo={ pathname === '/' }/>
            </div>
            {children}
            <div className='fixed bottom-0 w-full flex bg-[#111111] border-top text-white sm:pt-0 md:block'>
                <Footer />
            </div>
        </div>
    );
}