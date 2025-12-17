import React from 'react';
import {Link} from 'react-scroll';
const Links = [
    { link: "Home", section: "home" },
    { link: "About Us", section: "aboutus" },
    { link: "What We Do", section: "whatwedo" },
    { link: "Impact", section: "impact" },
    { link: "Get Involved", section: "getinvolved" },
    { link: "Blog", section: "blog" },
    { link: "Contact Us", section: "contact" }

];

const NavbarLink = () => {
    return (
        <ul className='flex gap-6 font-semibold lg:flex-row lg:text-black1 lg:bg-white sm:flex-col lg:relative sm:absolute sm:top-[120%] left-[50%] -translate-x-[50%] lg:text-[15px] sm:text-xl sm:text-white sm:text-center sm:bg-buttonred/70 backdrop-blur-lg lg:text-black sm:w-full py-4'>
            {Links.map((link, index) => (  // Fixed variable name
                <li key={index} className='group'>
                    <Link
                    to={link.section}
                    smooth={true}
                    spy={true}
                    duration={500}
                    offset={-130}
                    className='cursor-pointer hover:text-textred transition-all duration-500'>{link.link}</Link> {/* Fixed property access */}
                    <div className='mx-auto bg-buttonred w-0 group-hover:w-full h-[2px] transition-all duration-500'></div>
                </li>
            ))}
        </ul>
    );
};

export default NavbarLink;
