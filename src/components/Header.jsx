import { useContext, useState } from "react";
import { RxCross2, RxHamburgerMenu } from "react-icons/rx";
import { Link, NavLink, useNavigate } from "react-router-dom";

import { Avatar, Modal } from "@mui/material";
import { logout } from "../config/firebase";
import { useUser } from "../Context/User";
import Auth from "./auth/Auth";
import logo from "./logo.png";
import { EditorContext } from "./PracticeJS";
import { LoginModal } from "./LoginModal";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const { setHtml, setCss, setJs } = useContext(EditorContext);

  const { user, setUser } = useUser();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  console.log("user", user);

  return (
    <nav className="bg-[#070F2B] shadow-lg p-3 px-8 ">
      <Modal
        open={open}
        onClose={() => {
          setOpen(false);
        }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Auth />
      </Modal>

      <div className="flex justify-between items-center max-w-7xl mx-auto px-1 ">
        {/* Left side logo */}

        <div className="flex-shrink-0 flex items-center justify-start">
          <img className="h-6 w-full" src={logo} alt="Logo" />;
          {/* <Typography variant="h6" noWrap component="div" className='text-white'>
            JS_INFINITY_LAB
          </Typography> */}
        </div>

        {/* Center links */}
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
                    className={({ isActive }) =>
                      `${
                        isActive ? "text-white" : "text-grey-700"
                      } text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium`
                    }
                  >
                    Home
                  </NavLink>
                </li>
                <li
                  onClick={() => {
                    if (user?.userDetail && user.currentFile) {
                      navigate(`/playground/${user?.currentFile?.id}`);
                    } else {
                      navigate("/playground");
                    }
                  }}
                >
                  <NavLink
                    className={({ isActive }) =>
                      `${
                        isActive ? "text-white" : "text-grey-700"
                      } text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium`
                    }
                  >
                    Playground
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/notes"
                    className={({ isActive }) =>
                      `${
                        isActive ? "text-white" : "text-grey-700"
                      } text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium`
                    }
                  >
                    Notes
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/test-skill"
                    className={({ isActive }) =>
                      `${
                        isActive ? "text-white" : "text-grey-700"
                      } text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium`
                    }
                  >
                    Test skills
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* ? */}

        {/* Right side login/signup and hamburger menu */}
        <div className="-mr-2 flex items-center md:hidden">
          <button onClick={toggleMenu}>
            {!isOpen ? (
              <RxHamburgerMenu className="text-2xl text-white" />
            ) : (
              <RxCross2 className="text-2xl text-white" />
            )}
          </button>
        </div>
        <div className="hidden md:flex md:items-center space-x-3">
          {/* <Link
            to="#"
            onClick={() => {
              {!user?.userDetail && setOpen(true) }
            }}
            className="inline-flex items-center justify-center px-3 py-2 font-medium text-slim rounded-md text-white hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white transition duration-150 ease-in-out"
          >
            {user?.userDetail ? <Avatar sx={{ width: 28, height: 28 }} alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
              : 'Log in'}
          </Link> */}
          {user?.userDetail ? (
            <Avatar
              sx={{ width: 28, height: 28 }}
              alt={user?.userDetail?.displayName}
              src={`${user.userDetail.photoURL}`}
            />
          ) : (
            <>
              <LoginModal type="login" />
              <LoginModal type="" />
            </>
          )}

          {user?.userDetail && (
            <button className="logout">
              <Link
                to="#"
                onClick={() => {
                  logout();
                  setUser(null);
                  setHtml("");
                  setCss("");
                  setJs("");
                  navigate("/");
                }}
                className="inline-flex items-center justify-center px-3 py-2 font-medium text-slim rounded-md text-white hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white transition duration-150 ease-in-out"
              >
                Logout
              </Link>
            </button>
          )}
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
                  className={({ isActive }) =>
                    `${
                      isActive ? "text-orange-700" : "text-grey-700"
                    } block text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/notes"
                  className={({ isActive }) =>
                    `${
                      isActive ? "text-orange-700" : "text-grey-700"
                    } block text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium`
                  }
                >
                  Notes
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/playground"
                  className={({ isActive }) =>
                    `${
                      isActive ? "text-orange-700" : "text-grey-700"
                    } block text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium`
                  }
                >
                  playground
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/test-skill"
                  className={({ isActive }) =>
                    `${
                      isActive ? "text-orange-700" : "text-grey-700"
                    } block text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium`
                  }
                >
                  Test Skills
                </NavLink>
              </li>
              <li>
                {/* <Link
                  to="#"
                  onClick={toggleMenu}
                  className=" inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white transition duration-150 ease-in-out"
                >
                  Log in
                </Link> */}
                <LoginModal type="login" styles={"pt-2 px-3"} />
                <LoginModal type="" styles={"pt-4 px-3"} />
              </li>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
}
