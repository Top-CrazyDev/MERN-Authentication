import React from 'react';
import './Welcome.css';
import {Link} from 'react-router-dom';
const Welcome = () => {
    return(
        <div className='container'>
            <div className='header-container'>
                <div className='header-box'>
                    <div className='header-logo'>
                        <div className='logo'></div>
                        <div className='logotxt'>BriefPDF</div>
                    </div>
                </div>
                <div className='header-box2'>
                    <div className='login'><Link to="/Login">Login</Link></div>
                    <div className='login'><Link to="/Signup">Signup</Link></div>
                </div>
            </div>
            <div className='body-container'>
                    <div className='body-box1'>BriefPDF</div>
                    <div className='body-box2'>BriefPDFLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
            </div>
            <div className='footer-container'></div>
        </div>
    );
}
export default Welcome;