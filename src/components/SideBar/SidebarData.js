import React from 'react';
import * as TbIcons from "react-icons/tb";

export const SidebarData = [
  {
    title: 'Add Report',
    path: '/start',
    icon: <TbIcons.TbReportMedical />,
    cName: 'nav-text',
    userReq: false
  },
  {
    title: 'View Reports',
    path: '/viewReports',
    icon: <TbIcons.TbReportAnalytics />,
    cName: 'nav-text',
    userReq: false
  },
  {
    title: 'Profile',
    path: '/profile',
    icon: <TbIcons.TbHome2 />,
    cName: 'nav-text',
    userReq: false
  },
  {
    title: 'Log Out',
    path: '/logout',
    icon: <TbIcons.TbLogout />,
    cName: 'nav-text',
    userReq: true
  },
];