import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo-nav.png'
import { FaSearch } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';
import { ImCross } from 'react-icons/im';
import './Navbar.css'



const Navbar = () => {

    const [menuClicked, setMenuClicked] = useState(false)

    const handleMenuIcon = () => {
        setMenuClicked(true);
        if (menuClicked === true) {
            setMenuClicked(false)
        }
    }

    const menuItem = <React.Fragment>
        <li className='relative'><Link className='custom-nav'>Home</Link></li>
        <li className='relative'><Link className='custom-nav'>Courses</Link></li>
        <li className='relative'><Link className='custom-nav'>FAQ</Link></li>
        <li className='relative'><Link className='custom-nav'>Blog</Link></li>
    </React.Fragment>

    return (
        <div className='relative h-20 z-50'>
            <div className='bg-none'>
                <nav className='lg:container lg:mx-auto mr-5 ml-5'>
                    <div className='flex justify-between items-center'>
                        <div className='pt-5 pb-5'>
                            <Link><img className='lg:h-10 h-8' src={logo} alt="" /></Link>
                        </div>
                        <div>
                            <ul className='text-white font-semibold uppercase lg:flex justify-center items-center gap-10 hidden'>
                                {menuItem}
                            </ul>
                        </div>
                        <div className='text-white font-semibold uppercase'>
                            <div className='hidden lg:flex justify-center items-center'>
                                <p className='relative'><Link className='custom-nav'>Sign In</Link></p>
                                <button className='ml-5 h-10 w-10 rounded-full flex justify-center items-center hover:bg-primary hover:text-white ease-in-out duration-500'><FaSearch /></button>
                            </div>
                            <div className='lg:hidden flex justify-center items-center'>
                                <button onClick={handleMenuIcon} className='' >
                                    {menuClicked === false ?
                                        <GiHamburgerMenu /> : <ImCross />
                                    }
                                </button>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
            {menuClicked === false ?
                <></>
                :
                <div className=' w-[300px] h-screen bg-slate-800 pt-8 lg:w-[-300px] absolute right-0 '>
                    <ul className='text-white font-semibold uppercase  justify-center items-center gap-8 flex flex-col'>
                        {menuItem}
                        <li className='relative'><Link className='custom-nav'>Sign In</Link></li>
                    </ul>
                </div>
            }
            <div className='relative nav-bottom-line hidden lg:block'>
            </div>
        </div>
    );
};

export default Navbar;