import React from 'react';
import './Navigation.css';

const Navigation = (props) => {
    return (
        <div className='col-lg-12 col-md-12 col-sm-12'>
            <nav className="shift">
                <ul>
                    <li><span onClick={(e) => props.changePage(e, 'home')}>Home</span></li>
                    <li><span onClick={(e) => props.changePage(e, 'prices')}>Prices</span></li>
                    <li><span onClick={(e) => props.changePage(e, 'hours')}>Hours</span></li>
                </ul>
            </nav>
        </div>
    )
}

export default Navigation;