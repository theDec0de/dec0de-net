import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import WeaponTracker from './WeaponTracker';
import MealPrepper from './MealPrepper';

const HypertrophyTracker = React.lazy(() => import('./HypertrophyTracker'));

function App() {
    return (
        <Router>
            <Routes>
                {/* Home Page */}
                <Route 
                    path="/" 
                    element={
                        <>
                            <header className="header-banner silkscreen-regular">
                                <div className="dec-0-de-net">DEC0DE.NET</div>
                            </header>
                            <main className="content">
                                <img className="ellipse-1" src="/blacksabbath.png" alt="Black Sabbath" />
                                <h1 className="kyle-wilcox silkscreen-regular">Kyle Wilcox</h1>
                                <h3 className='handle-tag silkscreen-regular'>@DEC0DE</h3>
                                <div className="rectangle-2"></div>
                                <section className="dashboard">
                                    <h2 className="dashboard2 silkscreen-regular">Dashboard</h2>
                                    <nav className="buttons">
                                        <Link to="/HypertrophyTracker">
                                            <div className="circle_button" id="ht-button">Hypertrophy Tracker</div>
                                        </Link>
                                        <Link to="/WeaponTracker">
                                            <div className="circle_button" id="wt-button">Nier 1.2 Weapon Tracker</div>
                                        </Link>
                                        <Link to="/MealPrepper">
                                            <div className="circle_button" id="mp-button">Meal Prepper</div>
                                        </Link>
                                        {["Coming soon!", "Coming soon!", "Coming soon!", "Coming soon!", "Coming soon!", "Coming soon!"].map((button, index) => (
                                            <div key={index} className="circle_button">{button}</div>
                                        ))}
                                    </nav>
                                </section>
                                <div className="rectangle-3"></div>
                                <section className="about-div">
                                    <img src="/about_image.jpg" alt="" id='about-image'/>
                                    <h1 className="about-header silkscreen-regular">About</h1>
                                    <p className="about-text silkscreen-regular">
                                        Welcome to dec0de.net! This is a portfolio site that also acts as a launchpad for all my new or current webapps and content.
                                        <br /><br />
                                        I am a networking major that plays electric bass, enjoys making things, and goofing off. 
                                        You can follow me on 
                                        <a href="https://www.instagram.com/skeletor08/"> Instagram</a>, 
                                        <a href="https://www.linkedin.com/in/kylejwilcox/"> LinkedIn</a>, 
                                        or <a href="https://github.com/theDec0de">GitHub</a>. 
                                        Thanks for visiting!
                                    </p>
                                </section>
                            </main>
                        </>
                    }
                />

                {/* routes here */}
                <Route 
                    path="/HypertrophyTracker" 
                    element={
                        <Suspense fallback={<div>Loading Hypertrophy Tracker...</div>}>
                            <HypertrophyTracker />
                        </Suspense>
                    } 
                />
                <Route 
                    path="/WeaponTracker" 
                    element={
                        <Suspense fallback={<div>Loading Weapon Tracker</div>}>
                            <WeaponTracker />
                        </Suspense>
                    } 
                />
                <Route 
                    path="/MealPrepper" 
                    element={
                        <Suspense fallback={<div>Loading Meal Prepper</div>}>
                            <MealPrepper />
                        </Suspense>
                    } 
                />
            </Routes>
        </Router>
    );
}

export default App;