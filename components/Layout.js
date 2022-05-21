import MobileNav from "./MobileNav";
import Nav from "./Nav";
import Footer from "./Footer";

export default function Layout({ children, pathname }) {
    return (
        <div className='width-full min-h-screen'>
            <div className='absolute top-0 w-full z-10 bg-transparent h-12 sm:h-16 md:hidden'>
                <MobileNav />
            </div>
            <div className='hidden absolute top-0 z-10 w-full bg-transparent md:block md:h-[4.3rem] lg:h-25'>
                <Nav showBigLogo={ pathname === '/' }/>
            </div>
            {children}
            <div className='sticky top-[100vh] bottom-0 w-full flex bg-[#eeeeeeff] border-top text-black sm:pt-0 md:block'>
                <Footer />
            </div>
        </div>
    );
}