import React from 'react';
import './Navigation.css';

const Navigation = (props) => {
    return (
        <div className='col-lg-12 col-md-12 col-sm-12'>
            <nav className="shift">
                <ul>
                    {/* <li><span onClick={(e) => props.changePage(e, 'home')}>Home</span></li>
                    <li><span onClick={(e) => props.changePage(e, 'about')}>About</span></li>
                    <li><span onClick={(e) => props.changePage(e, 'projects')}>Projects</span></li>
                    <li><span onClick={(e) => props.changePage(e, 'contact')}>Contact</span></li> */}

                    <li><span>Home</span></li>
                    <li><span>About</span></li>
                    <li><span>Projects</span></li>
                    <li><span>Contact</span></li>
                </ul>
            </nav>
        </div>
    )
}

export default Navigation;