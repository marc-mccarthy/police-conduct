import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
// import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './SideBar.css';
import { IconContext } from 'react-icons';
import LogOutButton from '../LogOutButton/LogOutButton';
import { useSelector } from 'react-redux';

function SideBar() {
  const user = useSelector((store) => store.user);
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: '#ffff' }}>
        <div className='navbar'>
          <Link to='#' className='menu-bars'>
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
                <FaIcons.FaAngleDoubleLeft />
              </Link>
            </li>
            {user.id ?
                SidebarData.map((item, index) => {
                  return (
                    <li key={index} className={item.cName}>
                      <Link to={item.path}>
                        {item.icon}
                        <span>{item.title}</span>
                      </Link>
                    </li>
                )})
              :
                SidebarData.map((item, index) => {
                  if(item.userReq===false){
                    return (
                      <li key={index} className={item.cName}>
                        <Link to={item.path}>
                          {item.icon}
                          <span>{item.title}</span>
                        </Link>
                      </li>
                    )
                  }
                })
            }
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default SideBar;