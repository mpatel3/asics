import {headerLogo} from '../assets/images';
import {hamburger} from '../assets/icons';
import { navLinks } from '../constants.js';
import { asicsLogo } from '../assets/images';

const Nav = () => {
  return (
    <header className='padding-x py-8 absolute z-10 w-full'>
        <nav className='flex justify-between items-center max-container'>
            <a href="">
                <img 
                src={headerLogo}
                alt='Logo'
                width={130}
                height={30}
                />
            </a>
            <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
                {
                    navLinks.map((link) => {
                        return (
                            <li key={link.label}>
                                <a 
                                    href={link.href}
                                    className='font-montserrat leading-normal text-lg text-slate-gray'>
                                    {link.label}
                                </a>
                            </li>
                        )
                    })
                }
            </ul>
            <div className='max-lg:block hidden'>
                <img 
                    src={hamburger}
                    width={25}
                    height={25}
                />
            </div>
        </nav>
    </header>
  )
}

export default Nav