import React from 'react';
import s from './Navbar.module.css';


const Navbar = () => {
    return (
        <Navbar>
            <div className={s.navigation}>
                <div>
                    <a href="google.com">Profile</a>
                </div>
                <div>
                    <a href="google.com">Messages</a>
                </div>
                <div>
                    <a href="google.com">News</a>
                </div>
                <div>
                    <a href="google.com">Music</a>
                </div>
                <div>
                    <a href="google.com">Settings</a>
                </div>
            </div>

        </Navbar>
    )
}

export default Navbar