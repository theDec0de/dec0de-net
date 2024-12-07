import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import WeaponTracker from './WeaponTracker';
import MealPrepper from './MealPrepper';
import NavBar from './Components/NavBar';

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
                                <NavBar/>
                                <h1 className="dec0de_header">DEC0DE.NET</h1>
                            </header>
                            <main className="content">
                                <img className="ellipse-1" src="/profile_pic.png" alt="profile pic" />
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
                                    <img src="/logo_desktop.png" alt="" id='about-image'/>
                                    <h1 className="about-header gradient-header silkscreen-regular">About</h1>
                                    <p className="about-text silkscreen-regular">
                                        Welcome to dec0de.net! This is a portfolio site that also acts as a launchpad for all my new or current webapps and content. These tools are just personal projects meant for your own personal use, nothing major.
                                        <br /><br />
                                        I am a networking major that plays electric bass, enjoys making things, and goofing off. 
                                        You can follow me on 
                                        <a className='gradient-header' href="https://www.instagram.com/skeletor08/"> Instagram</a>, 
                                        <a className='gradient-header'href="https://www.linkedin.com/in/kylejwilcox/"> LinkedIn</a>, 
                                        or <a className='gradient-header'href="https://github.com/theDec0de">GitHub</a>. 
                                        Thanks for visiting!
                                    </p>
                                </section>
                                <section className="post-div">
                                    <img src="/ht_example.png" alt="" className='post-image'/>
                                    <h1 className="post-header ht-gradient-header silkscreen-regular">Hypertrophy Tracker</h1>
                                    <p className="post-text silkscreen-regular">
                                        Hypertrophy Tracker is a tool designed to help you keep track of your PRs during strength training.
                                        <br/><br/>
                                        As of now it is very basic, you just enter the type of excerise you're doing, the amount of sets, the amount of repititions, and the weight you're doing it at. Data is stored locally and is persistent even when the page is closed or reloaded.
                                    </p>
                                </section>
                                {/*
                                <section className="post-div">
                                    <img src="/about_image.jpg" alt="" className='post-image'/>
                                    <h1 className="post-header gradient-header silkscreen-regular">Lorem Ipsum</h1>
                                    <p className="post-text silkscreen-regular">
                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. At, recusandae! Doloribus temporibus fuga sint quaerat autem eum dolorem repudiandae nemo ut, nobis quod dolor vel, velit consequuntur! Cumque, repellat voluptas!
                                        <br /><br />
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis cupiditate accusantium tempore saepe voluptate, hic, dolor, asperiores est quis quam incidunt dicta velit repudiandae mollitia minima ex nulla obcaecati! Deleniti?
                                        </p>
                                </section>
                                */}
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