import { useLocation } from "wouter";

import { ReactComponent as MenuIcon } from '../assets/icons/menu.svg';
import { ReactComponent as ASIcon } from '../assets/icons/taecon.svg';
import { ReactComponent as CircleIcon } from '../assets/icons/circle.svg';

export default function NavHeader() {

    const [location, setLocation] = useLocation();

    function goHome() {
        setLocation('/');
    }

    function getLocationString(){
        return location.slice(1);
    }

    const isHome = location === "/";

    return <div className='flex justify-between w-full'>
        <div className='items-center cursor-pointer hidden md:flex'>
            <StyledNavLink onClick={goHome}>HOME</StyledNavLink>
            {
                !isHome && <CircleIcon className='w-2 h-2 mx-2 fill-black dark:fill-white' />
            }
            <StyledNavLink active>{getLocationString()}</StyledNavLink>
        </div>
        <div className='flex-1 flex justify-between md:hidden'>
            <button className=''>
                <ASIcon className='w-8 h-8 fill-black' />
            </button>
            <button className='flex justify-end'>
                <MenuIcon className='w-8 h-8' />
            </button>
        </div>
        <ASIcon className='hidden md:inline w-8 h-8 '/>
    </div>
}

function StyledNavLink({ active, children, ...rest }) {
    return <span className={`text-sm md:text-lg uppercase select-none font-heading font-bold inline-block cursor-pointer ${active ? 'underline decoration-2 underline-offset-4' : 'hover:opacity-70'}`} {...rest}>
        {children}
    </span>
}
