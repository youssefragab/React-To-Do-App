import React from 'react';
import {Link, NavLink, withRouter} from 'react-router-dom';
function Navbar(props) {
    return(
        <nav className="nav-wrapper darken-3">
            <div className="container">
                <a href="#" class="brand-logo">React Todo</a>
                <ul id="nav-mobile" class="right hide-on-med-and-down">
                <li><Link to="/">Home</Link></li>
                <li><NavLink to="/about">About</NavLink></li>
                <li><a target="_blank" href="https://github.com/youssefragab">Github</a></li>
                </ul>
            </div>
      </nav>
    );
}

export default withRouter(Navbar);