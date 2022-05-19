import MobileNav from "./MobileNav";
import Nav from "./Nav";
import Footer from "./Footer";

export default function Layout({ children }) {
    return (
        <div className='width-full'>
            <div className='absolute top-0 w-full z-10 bg-transparent h-12 sm:h-16 md:hidden'>
                <MobileNav />
            </div>
            <div className='hidden absolute top-0 z-10 w-full bg-transparent md:block md:h-[4.3rem] lg:h-25'>
                <Nav />
            </div>
            {children}
            <div className='relative bottom-0 w-full flex bg-[#0d0d0d] pt-16 md:fixed sm:pt-0 md:block md:relative lg:fixed'>
                <Footer />
            </div>
        </div>
    );
}