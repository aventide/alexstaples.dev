import { ReactComponent as MenuIcon } from '../assets/icons/menu.svg';
import { ReactComponent as ASIcon } from '../assets/icons/taecon.svg';
import { ReactComponent as CircleIcon } from '../assets/icons/circle.svg';

export default function NavHeader() {
    return <div className='flex justify-between w-full'>
        <div className='items-center cursor-pointer hidden md:flex'>
            <StyledNavLink>HOME</StyledNavLink>
            <CircleIcon className='w-2 h-2 mx-2 fill-black dark:fill-white' />
            <StyledNavLink active>RESUME</StyledNavLink>
        </div>
        <div className='flex-1 flex justify-between md:hidden'>
            <button className=''>
                <ASIcon className='w-8 h-8' />
            </button>
            <button className='flex justify-end'>
                <MenuIcon className='w-8 h-8' />
            </button>
        </div>
        <ASIcon className='hidden md:inline w-8 h-8' />
    </div>
}

function StyledNavLink({ active, children, ...rest }) {
    return <span className={`text-sm md:text-lg font-heading font-bold inline-block cursor-pointer ${active ? 'underline decoration-2 underline-offset-4' : 'hover:opacity-70'}`} {...rest}>
        {children}
    </span>
}
