import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout, reset } from '../../features/auth/user/authSlice';
import { GiHamburgerMenu } from 'react-icons/gi'
import { ImCross } from 'react-icons/im'
import getBlackLogo from '../../assets/images/company-logo.png';

import "./navbar.css"

function Navbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Data from Redux state handling
  const { user } = useSelector((state) => state.auth);

  // Handling the Logout
  const handleLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate('/login');
  };

  const [mobileMenu, setMobileMenu] = useState(false)

  return (
    <>
      <header className='sticky top-0 z-50 w-full flex justify-between items-center text-black '>
        <div className='md:ml-10'>
          <Link to='/'>
            <img src={getBlackLogo} alt='homeLogo' />
          </Link>
        </div>
        {/* for desktop screen */}
        <nav className='text-sm'>
          {/* <ul className='hidden md:flex gap-8 p-2 uppercase font-bold mr-10 text-md'> */}
          <ul className={mobileMenu ? "nav-links-MobileMenu" : "desktopMenu-links"} onClick={() => setMobileMenu(false)}>
            <li className='text-black'>
              <Link to='/'>Home</Link>
            </li>
            <li className='text-black'>
              <Link to='/product'>Products</Link>
            </li>
            <li className='text-black'>
              <Link to='/shop'>Shops</Link>
            </li>
            <div className='flex items-center'>
          <div className='mr-4 hidden md:flex search'>
            <input
              type='text'
              placeholder='Search'
              className='search p-2 w-full max-w-sm rounded-lg border-2 border-[#D9D9D9] placeholder:text-black focus:outline-[#D9D9D9]'
            />
          </div>
          {/* <div className="w-7 hidden lg:flex">
            <Link to="/profile">
              <img src={personIcon} alt="profileIcon" />
            </Link>
          </div> */}
        </div>
            {user ? (
          <>
            <div className='lg:flex'>
              <button
                onClick={handleLogout}
                className='text-white text-sm btn bg-black ml-6 hover:bg-black md:mr-10'
              >
                Logout
              </button>
            </div>
          </>
        ) : (
          <>
            <div className='lg:flex'>
              <Link
                to='/login'
                className='text-black font-bold text-sm btn btn-ghost'
              >
                Login
              </Link>
              <Link
                to='/register'
                className='text-white text-sm btn bg-black ml-6 hover:bg-black md:mr-10'
              >
                Sign up
              </Link>
            </div>
          </>
        )}
          </ul>
        </nav>
        
        {/* Display when on mobile screen */}
        <div className='md:hidden sm:flex justify-center items-center'>
          <div className='mr-4'>
            <input
              type='text'
              placeholder='Search'
              className=' p-1 w-full max-w-sm rounded-lg border-2 border-[#D9D9D9] placeholder:text-black focus:outline-[#D9D9D9]'
            />
          </div>
        </div>
        <div className="md:hidden sm:flex justify-center items-center mr-6">
          <div className="w-5">
            <button className="toggle" onClick={() => setMobileMenu(!mobileMenu)}>
            {
                        mobileMenu ? <ImCross className='close home-btn'/> : <GiHamburgerMenu className='open'/>
                    }
            </button>
            {/* <Link to="/profile">
              <img src={personIcon} alt="profileIcon" />
            </Link> */}
          </div>
        </div> 
        {/* Code stop here */}

        {/* Checking if signIn the Logout */}
        
      </header>
    </>
  );
}

export default Navbar;