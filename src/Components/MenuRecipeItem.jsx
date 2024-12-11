import './MenuRecipeItem.css'

function MenuRecipeItem() {
    return (
        <div class="menu-item">
          <img class="menu-item-img" src="/test.jpg" />
          <h3 class="recipe-text">This is a recipe text</h3>
          <img class="dots-1" src="dots.png" />
        </div>
    );
}

export default MenuRecipeItem;