import "./WeaponTracker.css"
import NavBar from './Components/NavBar'

function WeaponTracker() {
    return(
        <div className="weapon-tracker">
            <div className="weapon-tracker-banner">
                <NavBar/>
                <div className="weapon-tracker-label">NieR 1.2 Weapon Tracker</div>
            </div>
            <section className="weapon-tracker-content">
                <div>
                    
                </div>
            </section>
        </div>
    );
}

export default WeaponTracker;