import { useState, useEffect } from 'react';
import './NavBar.css';
import { Link, Router } from 'react-router-dom';

function NavBar() {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        if (open) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [open]);

    return (
        <nav className='nav_bar'>
            <button 
                className='nav_button' 
                style={{borderRadius: 360}} 
                onClick={() => setOpen(!open)}
            >
                <img id="button_image" src="/menu_icon.png" alt="menu" />
            </button>
            {open && <DropdownMenu />}
        </nav>
    );
}

function closeDropDown() {
    setOpen(false);
}

function DropdownMenu() {
    return (
        <>
        <div className='nav-dropdown-div'>
            <img src='/profile_pic.png' id='nav-logo'></img>
            <h1 id='nav-name'>Kyle Wilcox</h1>
            <hr id='nav-divider'></hr>
            <ul className='nav-dropdown-list'>
                <Link to="/"><li className='nav-item'><button>Home</button></li></Link>
                <Link to="/HypertrophyTracker"><li className='nav-item'><button>Hypertrophy Tracker</button></li></Link>
                <Link to="/WeaponTracker"><li className='nav-item'><button>Nier 1.2 Weapon Tracker</button></li></Link>
                <Link to="/MealPrepper"><li className='nav-item'><button>Meal Prepper</button></li></Link>
            </ul>
        </div>
        <div className='nav-dimmer' onClick={() => closeDropDown()}>
        </div>
        </>
    );
}

export default NavBar;
