import React, { useState } from 'react';
import Link from '../Link/Link';
// import { MenuIcon, XIcon } from '@heroicons/vue/solid'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faBars,xmark } from '@fortawesome/free-solid-svg-icons'
import { MenuIcon, XIcon } from '@heroicons/react/solid'

const Navbar = () => {
    const[open,setOpen]=useState(false)
    const routers =[
        {id :1, name:"Home", link:"/home"},
        {id :2, name:"About",link:"/about" },
        {id :3, name:"Service", link:"/service"},
        {id :2, name:"contact", link:"/contact"}
    ]
    return (
        <nav className='bg-teal-600'>
        <div onClick={()=> setOpen(!open)} className='w-6 h-6 md:hidden'>
     {/* {open ? <xmark></xmark>: <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>} */}
    { open ? <XIcon></XIcon>:<MenuIcon></MenuIcon>}
        </div>
           <ul className={`md:flex justify-center md:static p-3 bg-teal-600 w-full absolute duration-500 ease-in ${open ?'top-6':'top-[-120px]' }`}>
           {
                routers.map(router => <Link key={router.id} router={router}></Link>)
            }
           </ul>
        </nav>
    );
};

export default Navbar;