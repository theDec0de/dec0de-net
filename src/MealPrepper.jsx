import "./MealPrepper.css";
import NavBar from "./Components/NavBar";
import MenuRecipeItem from "./Components/MenuRecipeItem";

function MealPrepper() {
  return (
    <div className="meal-prepper">
      <div class="meal-prepper-header">
        <NavBar />
        <h1 class="meal-prepper-label">Meal Prepper</h1>
      </div>
      <div class="meal-prepper-content">
        <div class="food-menu">
          <h2 class="recipe-text">Recipes</h2>
          <div class="divider"></div>
          <h2 class="food-text">Foods</h2>
        </div>
        <MenuRecipeItem/>
        <MenuRecipeItem/>
        <MenuRecipeItem/>
      </div>
    </div>
  );
}

export default MealPrepper;