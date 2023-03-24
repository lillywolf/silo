import MobileNav from "./MobileNav";
import Nav from "./Nav";
import Footer from "./Footer";

export default function Layout({ children, pathname }) {
    return (
        <div className="width-full min-h-screen bg-auto bg-black">
            <div className='absolute top-0 w-full z-10 h-12 sm:h-16 lg:hidden'>
                <MobileNav />
            </div>
            <div className='hidden absolute top-0 z-10 w-full lg:block md:h-[4.3rem] lg:h-25'>
                <Nav showBigLogo={ pathname === '/' }/>
            </div>
            {children}
            <div className='fixed bottom-0 w-full flex h-12 border-top text-white sm:pt-0 md:block'>
                <Footer />
            </div>
        </div>
    );
}