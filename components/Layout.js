import MobileNav from "./MobileNav";
import Nav from "./Nav";
import Footer from "./Footer";

export default function Layout({ children }) {
    return (
        <div className='width-full m-auto relative'>
            <div className='absolute w-full z-10 bg-transparent h-12 sm:h-16 md:hidden'>
                <MobileNav />
            </div>
            <div className='hidden absolute z-10 w-full bg-transparent md:block md:h-[4.3rem] lg:h-25'>
                <Nav />
            </div>
            {children}
            <div className='relative xs:fixed bottom-0 w-full flex bg-[#0d0d0d] s:pt-16 md:block md:relative lg:fixed'>
                <Footer />
            </div>
        </div>
    );
}