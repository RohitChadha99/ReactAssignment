import React from "react";
import '../Home.css';
import { Link } from "react-router-dom";
import { FaUser, FaUsers, FaCalendarAlt, FaTachometerAlt } from 'react-icons/fa';

const Drawer = () => {
    return (
        <ul style={{ cursor: 'pointer', listStyle: 'none', padding: '0px', margin: '0px', marginLeft: '3px' }}>
            <li style={{ marginTop: '20px' }}>
                <Link to="/dashboard" style={{ padding: '18px' }}><FaTachometerAlt style={{ color: 'white' }} /></Link>
                <p style={{ color: 'white', fontSize: '9px', margin: '0px', paddingLeft: '8px' }}>Dashboard</p>
            </li>
            <li style={{ marginTop: '20px' }}>
                <Link to="/profile" style={{ padding: '18px' }}><FaUser style={{ color: 'white' }} /></Link>
                <p style={{ color: 'white', fontSize: '9px', margin: '0px', paddingLeft: '8px' }}>My Profile</p>
            </li>
            <li style={{ marginTop: '20px' }}>
                <Link to="/employees" style={{ padding: '18px' }}><FaUsers style={{ color: 'white' }} /></Link>
                <p style={{ color: 'white', fontSize: '9px', margin: '0px', paddingLeft: '8px' }}>Employees</p>
            </li>
            <li style={{ marginTop: '20px' }}>
                <Link to="/" style={{ padding: '18px' }}><FaCalendarAlt style={{ color: 'white' }} /></Link>
                <p style={{ color: 'white', fontSize: '9px', margin: '0px', paddingLeft: '8px' }}>Calender</p>
            </li>
        </ul>
    )
}

export default Drawer; 