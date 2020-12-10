import  React, {Component} from 'react';
import { BrowserRouter,Link } from 'react-router-dom';

const Menu = () => {
    return(
        <BrowserRouter>
        <div>
            <ul>
            <li><Link>PROTAL</Link></li>
            <li><Link><i className="far fa-home-alt"></i></Link></li>
            <li><Link></Link></li>
            <li><Link></Link></li>
            </ul>
        </div>
        <div className="container">
           
        </div>
        </BrowserRouter>
    );
}

export default Menu;