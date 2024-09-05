// src/Dashboard.js

import React from 'react';
import { FaUser, FaUsers, FaCalendarAlt, FaClock, FaMoneyBill, FaFileAlt, FaChartLine, FaBook, FaTachometerAlt } from 'react-icons/fa';

const Dashboard = () => {
  const dashboardStyle = {
    fontFamily: 'Arial, sans-serif',
    display: 'flex',
    backgroundColor: '#F4F7FC',
  };

  const drawerStyle = {
    width: '80px',
    backgroundColor: '#1C75BC',
    padding: '20px 0',
    color: 'white',
    minHeight: '100vh',
    position: 'fixed',
    top: 0,
    left: 0,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };

  const drawerItemStyle = {
    marginBottom: '20px',
    cursor: 'pointer',
    color: 'white',
    fontSize: '24px',
  };

  const activeItemStyle = {
    backgroundColor: '#135A91',
    borderRadius: '50%',
    padding: '10px',
  };

  const mainContentStyle = {
    display: 'flex',
    marginLeft: '100px', // Add space for the drawer
    padding: '20px',
    width: '100%',
  };

  const headerStyle = {
    textAlign: 'left',
    marginBottom: '20px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  };

  const containerStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '20px',
  };

  const cardStyle = {
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
  };

  const profileCardStyle = {
    backgroundColor: 'white',
    borderRadius: '15px',
    padding: '20px',
    textAlign: 'center',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    maxWidth: '250px',
    margin: '0 auto 20px auto',
  };

  const profileImageStyle = {
    width: '80px',
    height: '80px',
    borderRadius: '50%',
    marginRight: '20px',
  };

  const titleStyle = {
    color: '#343A40',
    marginBottom: '10px',
    fontSize: '18px',
    fontWeight: 'bold',
  };

  const textStyle = {
    color: '#6C757D',
    margin: '5px 0',
    fontSize: '14px',
  };

  const headerTitleStyle = {
    color: '#343A40',
    fontSize: '24px',
    fontWeight: 'bold',
  };

  const applyButtonStyle = {
    color: '#6C63FF',
    border: '2px solid #6C63FF',
    borderRadius: '20px',
    padding: '5px 15px',
    cursor: 'pointer',
    fontWeight: 'bold',
    display: 'inline-block',
    marginTop: '10px',
    textAlign: 'center',
  };

  return (
    <div style={dashboardStyle}>
      <div style={drawerStyle}>
        <div style={{ ...drawerItemStyle, ...activeItemStyle }}>
          <FaTachometerAlt />
        </div>
        <div style={drawerItemStyle}>
          <FaUser />
        </div>
        <div style={drawerItemStyle}>
          <FaUsers />
        </div>
        <div style={drawerItemStyle}>
          <FaCalendarAlt />
        </div>
        <div style={drawerItemStyle}>
          <FaClock />
        </div>
        <div style={drawerItemStyle}>
          <FaMoneyBill />
        </div>
        <div style={drawerItemStyle}>
          <FaFileAlt />
        </div>
        <div style={drawerItemStyle}>
          <FaChartLine />
        </div>
        <div style={drawerItemStyle}>
          <FaBook />
        </div>
      </div>

      <div style={mainContentStyle}>
        <div style={profileCardStyle}>
          <img
            style={profileImageStyle}
            src="https://via.placeholder.com/80"
            alt="Profile"
          />
          <div>
            <h1 style={headerTitleStyle}>Rohit</h1>
            <p style={textStyle}>Software Engineer</p>
            <p style={textStyle}>rohit@thinksys.com</p>
            <p style={textStyle}>Reports to: </p>
          </div>
        </div>

        <div style={containerStyle}>
          <div style={cardStyle}>
            <h2 style={titleStyle}>Manage Leaves</h2>
            {/* Example content */}
            <p style={textStyle}>Leave details with chart</p>
            <div style={applyButtonStyle}>Apply</div>
          </div>

          <div style={cardStyle}>
            <h2 style={titleStyle}>Recent Applied Leaves</h2>
            <p style={textStyle}>No Leaves Applied Recently</p>
          </div>

          <div style={cardStyle}>
            <h2 style={titleStyle}>Today's Attendance</h2>
            <p style={textStyle}><strong>03:57:54 Hrs</strong> Total Work Time</p>
            <p style={textStyle}>Check In Time: 08:50:13</p>
          </div>

          <div style={cardStyle}>
            <h2 style={titleStyle}>Events</h2>
            <p style={textStyle}><strong>Ujjwal Pachori</strong></p>
            <p style={textStyle}>Birthday on 09 September</p>
            <div style={applyButtonStyle}>Share Your Wishes</div>
          </div>

          <div style={cardStyle}>
            <h2 style={titleStyle}>New Joinees</h2>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
              <li style={textStyle}><strong>Mallika Mishra</strong> - Software Trainee</li>
              <li style={textStyle}><strong>Lochan Sharma</strong> - Software Trainee</li>
              <li style={textStyle}><strong>Neeraj Satpola</strong> - Software Trainee</li>
              <li style={textStyle}><strong>Sunaina Yadav</strong> - Software Trainee</li>
            </ul>
          </div>

          <div style={cardStyle}>
            <h2 style={titleStyle}>All Posts</h2>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
              <li style={textStyle}><strong>Admirable dedication</strong></li>
              <li style={textStyle}><strong>Webinar on Migraine and Brain Health at Work</strong></li>
              <li style={textStyle}><strong>Crushing Those Tickets!</strong></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
