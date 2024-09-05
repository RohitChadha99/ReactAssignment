import React from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Divider, Typography } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import GroupIcon from '@mui/icons-material/Group';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import PolicyIcon from '@mui/icons-material/Policy';
import GradeIcon from '@mui/icons-material/Grade';
import MenuBookIcon from '@mui/icons-material/MenuBook';

const drawerWidth = 240;

const Sidebar = () => {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
      }}
    >
      <Typography variant="h6" sx={{ padding: 2, textAlign: 'center' }}>
        Logo
      </Typography>
      <Divider />
      <List>
        {[
          { text: 'Dashboard', icon: <DashboardIcon /> },
          { text: 'My Profile', icon: <PersonIcon /> },
          { text: 'Employees', icon: <GroupIcon /> },
          { text: 'Calendar', icon: <CalendarTodayIcon /> },
          { text: 'Attendance', icon: <AccessTimeIcon /> },
          { text: 'Finance', icon: <AttachMoneyIcon /> },
          { text: 'Policies', icon: <PolicyIcon /> },
          { text: 'Appraisal', icon: <GradeIcon /> },
          { text: 'Handbook', icon: <MenuBookIcon /> },
        ].map((item, index) => (
          <ListItem button key={index}>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
      <Divider />
    </Drawer>
  );
};

export default Sidebar;
