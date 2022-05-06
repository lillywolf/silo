import MobileNav from "./MobileNav";
import Nav from "./Nav";
import Footer from "./Footer";

export default function Layout({ children }) {
    return (
        <div className='width-full'>
            <div className='absolute top-0 w-full z-10 bg-transparent h-12 sm:h-16 md:hidden'>
                <MobileNav />
            </div>
            <div className='hidden absolute z-10 w-full bg-transparent md:block md:h-[4.3rem] lg:h-25'>
                <Nav />
            </div>
            {children}
        </div>
    );
}