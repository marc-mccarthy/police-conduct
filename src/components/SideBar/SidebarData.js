import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as GiIcons from 'react-icons/gi';
import * as BsIcons from "react-icons/bs";
import * as MuIcons from "react-icons/md";
import * as TbIcons from "react-icons/tb";

export const SidebarData = [
  {
    title: 'Add Report',
    path: '/start',
    icon: <TbIcons.TbReportMedical />,
    cName: 'nav-text'
  },
  {
    title: 'View Reports',
    path: '/viewReport',
    icon: <TbIcons.TbReportAnalytics />,
    cName: 'nav-text'
  },
  {
    title: 'Profile',
    path: '/profile',
    icon: <TbIcons.TbHome2 />,
    cName: 'nav-text'
  },
  {
    title: 'Log Out',
    path: '/logout',
    icon: <TbIcons.TbLogout />,
    cName: 'nav-text'
  },
];