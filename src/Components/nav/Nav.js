import React from 'react';
import logo from '../../Images/topImg.jpg';
import './Nav.css';

const Nav = () => {
    return (
        <div className="Nav">
            <img className="logo" src={logo} alt="logo" />
            <p className="Welcome">
                <h1>Welcome to the world of Champions</h1>
                <h3>
                    You can find here the top Universities of ACM ICPC (International Collegiate Programming Contest
                    ) and the cost to have a bachelor digree from those fintastic places.
                </h3>
                Total Budget to Study (per year) : <b>BDT <span>1000000</span></b>
            </p>
        </div>
    );
};

export default Nav;