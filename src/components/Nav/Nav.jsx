import React, {useState, useEffect} from 'react';
import { Link, useLocation } from 'react-router-dom';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';
import { useSelector } from 'react-redux';
import SideBar from '../SideBar/SideBar';
import ProgressBar from '../ProgressBar/ProgressBar';
import { useHistory } from 'react-router';


function Nav() {
  const user = useSelector((store) => store.user);
  const location = useLocation();
  const history = useHistory();

  const [show, setShow] = useState(false)

  const currentLocation = location.pathname;

  const addReportPaths = ['/start', '/officer-details', '/interaction-details', '/description', '/outcomes', '/review', '/done']

  useEffect(()=>{
    // console.log(addReportPaths.includes(currentLocation))
    // console.log(show)
    handleProgressBar();
  });

  const handleProgressBar=()=>{
    if(addReportPaths.includes(currentLocation)){
      setShow(true);
    }else {
      setShow(false);
    };
  }

  return (
    <div className="nav">
      <SideBar className='SidebarNav' />
        {show ?
          <div>
          <ProgressBar />
          </div>
        :
          <></>
        }
      </div>
  );
}

export default Nav;
