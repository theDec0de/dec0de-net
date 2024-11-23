import HypertrophyTracker from './HypertrophyTracker';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import "./App.css";

// <Link to="/HypertrophyTracker">HypertrophyTracker</Link>
function App() {
    return (
        <Router>
            <Routes>
                {/* Home Route */}
                <Route 
                    path="/" 
                    element={
                        <div>
                            <div className={"header-banner silkscreen-regular"}>
                                <div className="dec-0-de-net">DEC0DE.NET</div>
                            </div>      
                            <div className="content">
                                <img className="ellipse-1" src="./public/blacksabbath.png" alt="Black Sabbath" />
                                <h1 className={"kyle-wilcox silkscreen-regular"}>Kyle Wilcox</h1>
                                <div className="dashboard">
                                    <div className="rectangle-2"></div>
                                    <div className={"dashboard2 silkscreen-regular"}>Dashboard</div>
                                    <div className="buttons">
                                        <Link to="/HypertrophyTracker">
                                            <div className="circle_button" id='ht-button'>Hypertrophy Tracker</div>
                                        </Link>
                                        <div className="circle_button">b</div>
                                        <div className="circle_button">c</div>
                                        <div className="circle_button">d</div>
                                        <div className="circle_button">e</div>
                                        <div className="circle_button">f</div>
                                        <div className="circle_button">g</div>
                                        <div className="circle_button">h</div>
                                        <div className="circle_button">i</div>
                                    </div>
                                </div>
                                <div className="rectangle-3"></div>
                                <div className='about-div'>
                                    <h1 className={"about-header silkscreen-regular"}>About</h1>
                                    <p className={"about-text silkscreen-regular"}>Welcome to dec0de.net! This is a portfolio site that also acts as a launchpad for all my new or current webapps.
                                        
                                        <br/><br/>I am a networking major that plays elctric bass, enjoys making things, and goofing off. You can follow me on <a href='https://www.instagram.com/skeletor08/'>instagram</a>, <a href='https://www.linkedin.com/in/kylejwilcox/'>linkedin</a>, or <a href='https://github.com/theDec0de'>github</a>. Thanks for visiting!</p>
                                </div>
                            </div>
                        </div>
                    } 
                />
                
                {/* Hypertrophy Tracker Route */}
                <Route path="/HypertrophyTracker" element={<HypertrophyTracker />} />
            </Routes>
        </Router>
    );
}

export default App;
