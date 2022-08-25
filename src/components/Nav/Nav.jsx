import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';
import { useSelector } from 'react-redux';
import SideBar from '../SideBar/SideBar';


function Nav() {
  const user = useSelector((store) => store.user);

  return (
    <div className="nav">
      <SideBar className='SidebarNav' />
    </div>
  );
}

export default Nav;
