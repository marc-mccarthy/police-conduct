import React, {useState} from 'react';
import { Link, useLocation } from 'react-router-dom';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';
import { useSelector } from 'react-redux';
import SideBar from '../SideBar/SideBar';
import ProgressBar from '../ProgressBar/ProgressBar';

function Nav() {
  const user = useSelector((store) => store.user);
  const [ navRoute, setNavRoute ] = useState( false )
  const location = useLocation();

  

  return (
    <div className="nav">
      <SideBar className='SidebarNav' />
      <div>
        <h2 className='nav-title'><ProgressBar /></h2>
      </div>
    </div>
  );
}

export default Nav;
