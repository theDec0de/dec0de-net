import './MealPrepper.css';
import NavBar from './Components/NavBar';

function MealPrepper() {
    return(
        <div className="meal-prepper">
            <div className="meal-prepper-banner">
                <NavBar/>
                <div className="meal-prepper-label">Meal Prepper</div>
            </div>
            <div class="meal-preppr-content">
            </div>
        </div>
    );
}

export default MealPrepper;