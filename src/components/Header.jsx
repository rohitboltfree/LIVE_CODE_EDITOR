import { useState } from 'react';
import { RxCross2, RxHamburgerMenu } from 'react-icons/rx';
import {Link, NavLink} from 'react-router-dom'

import Typography from '@mui/material/Typography';
import { Modal } from '@mui/material';
import Auth from './auth/Auth';

export default function Header() {
  
  const [isOpen, setIsOpen] = useState(false);
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-slate-800">
        <Modal
        open={open}
        onClose={()=>{
          setOpen(false);
        }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Auth/>
      </Modal>
      
        <div className="flex justify-between items-center h-9 max-w-7xl mx-auto px-1 ">
          {/* Left side logo */}
         <div className="hidden md:block">
            <div className="ml-3 flex flex-row-reverse justify-between items-baseline space-x-4">
              <div
                      className=" justify-between items-center w-full lg:flex md:w-auto md:order-1"
                      id="mobile-menu-2"
                  >
                      <ul className="flex  mt-4 font-medium md:flex-row md:space-x-8 md:mt-0">
                          <li>
                              <NavLink
                              to="/"
                                  className={({isActive}) =>  
                                    `${isActive? 'text-white':'text-grey-700'} text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium`
                                    
                                  }
                              >
                                  Home
                              </NavLink>
                          </li>
                          <li>
                              <NavLink
                              to='/PracticeJS'
                                  className={({isActive}) =>
                                    `${isActive? "text-white":"text-grey-700"} text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium`
                                  }
                              >
                                 PracticeJS
                              </NavLink>
                          </li>
                      </ul>
                  </div>
                  
            </div>
          </div>
          {/* Center links */}
          <div className="flex-shrink-0 flex items-center justify-start">
            {/* <img className="h-8 w-auto" src="/logo.png" alt="Logo" /> */}
            <Typography variant="h6" noWrap component="div" className='text-white'>
                       JS_INFINITY_LAB
          </Typography>
          </div>
         {/* ? */}
          

          {/* Right side login/signup and hamburger menu */}
          <div className="-mr-2 flex items-center md:hidden">
           <button onClick={toggleMenu}>
           { !isOpen ? <RxHamburgerMenu className='text-2xl text-white' />
           :<RxCross2 className='text-2xl text-white' />}
           </button>
                  
          </div>
          <div className='hidden md:block justify-center justify-items-end'> 
                  <Link
                          to="#"
                          onClick={()=>{
                            setOpen(true)
                          }} 
                          className="inline-flex items-center justify-center px-3 py-2 font-medium text-slim rounded-md text-white hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white transition duration-150 ease-in-out"
                      >
                          Log in
                      </Link>
                  </div>
        </div>
       
      

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          
           <div className="px-2 pt-2 pb-3 sm:px-3">
                      <ul className="px-2 pt-2 pb-3 sm:px-3">
                          <li>
                              <NavLink
                              to="/"
                                  className={({isActive}) =>
                                    `${isActive? 'text-orange-700':'text-grey-700'} block text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium`
                                    
                                  }
                              >
                                  Home
                              </NavLink>
                          </li>
                          <li>
                              <NavLink
                              to='/PracticeJS'
                                  className={({isActive}) =>
                                    `${isActive? "text-orange-700":"text-grey-700"} block text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium`
                                  }
                              >
                                 PracticeJS
                              </NavLink>
                          </li>
                          <li>
                          <Link
                          to="#"
                          onClick={toggleMenu} 
                          className=" inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white transition duration-150 ease-in-out"
                      >
                          Log in
                      </Link>
                          </li>
                      </ul>
                  </div>
        </div>
      )}
    </nav>
  );




}



