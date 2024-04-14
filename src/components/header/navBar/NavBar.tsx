import React from "react";
import { FaBars, FaSearch, FaShoppingBag, FaUserCircle } from "react-icons/fa";
/**
 * The `NavBar` component represents the navigation bar at the top of the application.
 * It includes a menu button that can be clicked to toggle the visibility of the navigation menu.
 */

const NavBar = () => {
      return (
            <div className='flex justify-between items-center  bg-black text-neutral-600 p-3 border-t-[2px] border-b-0 border-l-0 border-r-0 border-yellow-600'>
                  <BarIcon />
                  <Logo />
                  <NavBarIcons />
            </div>
      );
};

export default NavBar;

//icon component
/**
 * Renders an icon component that represents a menu button.
 * This icon is typically used to toggle the visibility of a navigation menu.
 */
const BarIcon = () => {
      return (
            <div>
                  <FaBars className='text-2xl hover:scale-125 transform transition-all duration-700' />
            </div>
      );
};

//logo component
/**
 * Renders the logo component for the navigation bar.
 */
const Logo = () => {
      return (
            <div className='flex flex-col items-center justify-center'>
                  <img
                        src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png'
                        alt='logo'
                  />
            </div>
      );
};

// nav bar icons component

/**
 * Renders the navigation bar icons, including the search, shopping bag, and user profile icons.
 */
const NavBarIcons = () => {
      const icons: React.ReactNode[] = [
            <FaSearch className='text-gray-600 hover:text-gray-800 transition-all  duration-500 text-3xl' />,
            <FaUserCircle className='text-gray-600 hover:text-gray-800 transition-colors duration-300 text-3xl' />,
            <FaShoppingBag className='text-gray-600 hover:text-gray-800 transition-colors duration-300 text-3xl' />,
      ];

      return (
            <div className='flex items-center space-x-4'>
                  {icons.map(
                        (icon: React.ReactNode, index: number): React.ReactNode => (
                              <div
                                    key={index}
                                    className='hover:text-yellow-600 cursor-pointer hover:scale-125 transform transition-all duration-700'
                              >
                                    {icon}
                              </div>
                        )
                  )}
            </div>
      );
};
