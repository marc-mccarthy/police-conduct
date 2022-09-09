import React, {useState, useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import './Nav.css';
import { useSelector } from 'react-redux';
import SideBar from '../SideBar/SideBar';
import ProgressBar from '../ProgressBar/ProgressBar';


function Nav() {
  const user = useSelector((store) => store.user);
  const location = useLocation();

  const [show, setShow] = useState(false)

  const currentLocation = location.pathname;

  const addReportPaths = ['/start', '/officer-details', '/interaction-details', '/interaction-summary',  '/outcomes', '/review', '/submitted']

  useEffect(()=>{
    handleProgressBar();
  });

  const handleProgressBar=()=>{
    addReportPaths.includes(currentLocation) ?
      setShow(true)
      :
      setShow(false)
  };

  return (
    <div className="nav">
      <SideBar className='SidebarNav' />
      {
        show ?
          <div className="progress-bar">
          <ProgressBar />
          </div>
        :
        user.access === 1 && !show ?
          <div className='AdminContainer'>
            <h3 className='AdminText'>Super Admin</h3>
          </div>
        :
          <></>
      }
    </div>
  );
}

export default Nav;
