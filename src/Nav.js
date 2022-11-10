import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import "./Nav.css";
function Nav() {
    // navbar transitions condition
    const [show, handleShow] = useState(false);
    const history = useHistory();

    const transitionNavBar = () => {
        if (window.scrollY > 100) {
            handleShow(true);
        } else {
            handleShow(false);
        }

    }
    // navbar transition effect
    useEffect(() => {
        window.addEventListener("scroll", transitionNavBar);
        return () => window.removeEventListener("scroll", transitionNavBar)
    }, [])

    // html and css classes for navbar
    return <div className={`nav ${show && 'nav_black'}`}>
        <div className="nav_contents">
            <img onClick={() => history.push("/")}
            className='nav_logo' src='https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png'
            alt='netflix logo' />

            <img onClick={() => history.push("/profile")}
            className='nav_avatar'
            src='https://i.pinimg.com/originals/34/62/d2/3462d27440aa255b1c314ff16f4032b4.png'
            alt='Avatar' />
        </div>
    </div>;

}

export default Nav;