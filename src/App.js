import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Home from "./pages/Home";
import CreateRecipeIngredients from "./pages/CreateRecipeIngredients";
import CreateRecipeIngredients1 from "./pages/CreateRecipeIngredients1";
import RectangleFrame from "./pages/RectangleFrame";
import RecipeComplete from "./pages/RecipeComplete";
import RecipeIngredient from "./pages/RecipeIngredient";
import CreateRecipeIngredients2 from "./pages/CreateRecipeIngredients2";
import ActiveTimedTaskGreyedOut1 from "./pages/ActiveTimedTaskGreyedOut1";
import ActiveTimedTask from "./pages/ActiveTimedTask";
import PassiveTimedTask from "./pages/PassiveTimedTask";
import UntimedTask from "./pages/UntimedTask";
import IngredientTask from "./pages/IngredientTask";
import RecipeIngrident from "./pages/RecipeIngrident";
import CreateRecipeIngredients3 from "./pages/CreateRecipeIngredients3";
import Frame from "./pages/Frame";
import GroupFrame from "./pages/GroupFrame";
import CreateRecipeIngredients4 from "./pages/CreateRecipeIngredients4";
import ShoppingCartProcessOfDele from "./pages/ShoppingCartProcessOfDele";
import ShoppingCartItemMarkedAs from "./pages/ShoppingCartItemMarkedAs";
import ShoppingCart from "./pages/ShoppingCart";
import ShoppingCartAfterItemAdde from "./pages/ShoppingCartAfterItemAdde";
import RecipeSaved from "./pages/RecipeSaved";
import RecipeIngredient1 from "./pages/RecipeIngredient1";
import ShoppingCartAfterAddToY from "./pages/ShoppingCartAfterAddToY";
import CreateRecipeIngredients5 from "./pages/CreateRecipeIngredients5";
import CreateRecipeIngredients6 from "./pages/CreateRecipeIngredients6";
import MyRecipes from "./pages/MyRecipes";
import RecipeProcedure from "./pages/RecipeProcedure";
import RecipeIngredient2 from "./pages/RecipeIngredient2";
import Profile from "./pages/Profile";
import ViewNotifications from "./pages/ViewNotifications";
import SavedRecipe from "./pages/SavedRecipe";
import Home1 from "./pages/Home1";
import CreateAnAccount from "./pages/CreateAnAccount";
import Login from "./pages/Login";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/create-recipe-ingredients5":
        title = "";
        metaDescription = "";
        break;
      case "/create-recipe-ingredients6":
        title = "";
        metaDescription = "";
        break;
      case "/rectangle-6":
        title = "";
        metaDescription = "";
        break;
      case "/recipe-complete":
        title = "";
        metaDescription = "";
        break;
      case "/recipeingredient":
        title = "";
        metaDescription = "";
        break;
      case "/create-recipe-ingredients4":
        title = "";
        metaDescription = "";
        break;
      case "/active-timed-task-greyed-out":
        title = "";
        metaDescription = "";
        break;
      case "/active-timed-task":
        title = "";
        metaDescription = "";
        break;
      case "/passive-timed-task":
        title = "";
        metaDescription = "";
        break;
      case "/untimed-task":
        title = "";
        metaDescription = "";
        break;
      case "/ingredient-task":
        title = "";
        metaDescription = "";
        break;
      case "/recipeingrident":
        title = "";
        metaDescription = "";
        break;
      case "/create-recipe-ingredients1":
        title = "";
        metaDescription = "";
        break;
      case "/frame-126":
        title = "";
        metaDescription = "";
        break;
      case "/group-105":
        title = "";
        metaDescription = "";
        break;
      case "/create-recipe-ingredients":
        title = "";
        metaDescription = "";
        break;
      case "/shopping-cart-process-of-deleting-item":
        title = "";
        metaDescription = "";
        break;
      case "/shopping-cart-item-marked-as-completed":
        title = "";
        metaDescription = "";
        break;
      case "/shopping-cart":
        title = "";
        metaDescription = "";
        break;
      case "/shopping-cart-after-item-added":
        title = "";
        metaDescription = "";
        break;
      case "/recipe-saved":
        title = "";
        metaDescription = "";
        break;
      case "/recipeingredient2":
        title = "";
        metaDescription = "";
        break;
      case "/shopping-cart-after-add-to-your-shopping-list-pressed":
        title = "";
        metaDescription = "";
        break;
      case "/create-recipe-ingredients3":
        title = "";
        metaDescription = "";
        break;
      case "/create-recipe-ingredients2":
        title = "";
        metaDescription = "";
        break;
      case "/my-recipes":
        title = "";
        metaDescription = "";
        break;
      case "/recipeprocedure":
        title = "";
        metaDescription = "";
        break;
      case "/recipeingredient1":
        title = "";
        metaDescription = "";
        break;
      case "/profile":
        title = "";
        metaDescription = "";
        break;
      case "/view-notifications":
        title = "";
        metaDescription = "";
        break;
      case "/saved-recipe":
        title = "";
        metaDescription = "";
        break;
      case "/home":
        title = "";
        metaDescription = "";
        break;
      case "/create-an-account":
        title = "";
        metaDescription = "";
        break;
      case "/login":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/create-recipe-ingredients5"
        element={<CreateRecipeIngredients />}
      />
      <Route
        path="/create-recipe-ingredients6"
        element={<CreateRecipeIngredients1 />}
      />
      <Route path="/rectangle-6" element={<RectangleFrame />} />
      <Route path="/recipe-complete" element={<RecipeComplete />} />
      <Route path="/recipeingredient" element={<RecipeIngredient />} />
      <Route
        path="/create-recipe-ingredients4"
        element={<CreateRecipeIngredients2 />}
      />
      <Route
        path="/active-timed-task-greyed-out"
        element={<ActiveTimedTaskGreyedOut1 />}
      />
      <Route path="/active-timed-task" element={<ActiveTimedTask />} />
      <Route path="/passive-timed-task" element={<PassiveTimedTask />} />
      <Route path="/untimed-task" element={<UntimedTask />} />
      <Route path="/ingredient-task" element={<IngredientTask />} />
      <Route path="/recipeingrident" element={<RecipeIngrident />} />
      <Route
        path="/create-recipe-ingredients1"
        element={<CreateRecipeIngredients3 />}
      />
      <Route path="/frame-126" element={<Frame />} />
      <Route path="/group-105" element={<GroupFrame />} />
      <Route
        path="/create-recipe-ingredients"
        element={<CreateRecipeIngredients4 />}
      />
      <Route
        path="/shopping-cart-process-of-deleting-item"
        element={<ShoppingCartProcessOfDele />}
      />
      <Route
        path="/shopping-cart-item-marked-as-completed"
        element={<ShoppingCartItemMarkedAs />}
      />
      <Route path="/shopping-cart" element={<ShoppingCart />} />
      <Route
        path="/shopping-cart-after-item-added"
        element={<ShoppingCartAfterItemAdde />}
      />
      <Route path="/recipe-saved" element={<RecipeSaved />} />
      <Route path="/recipeingredient2" element={<RecipeIngredient1 />} />
      <Route
        path="/shopping-cart-after-add-to-your-shopping-list-pressed"
        element={<ShoppingCartAfterAddToY />}
      />
      <Route
        path="/create-recipe-ingredients3"
        element={<CreateRecipeIngredients5 />}
      />
      <Route
        path="/create-recipe-ingredients2"
        element={<CreateRecipeIngredients6 />}
      />
      <Route path="/my-recipes" element={<MyRecipes />} />
      <Route path="/recipeprocedure" element={<RecipeProcedure />} />
      <Route path="/recipeingredient1" element={<RecipeIngredient2 />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/view-notifications" element={<ViewNotifications />} />
      <Route path="/saved-recipe" element={<SavedRecipe />} />
      <Route path="/home" element={<Home1 />} />
      <Route path="/create-an-account" element={<CreateAnAccount />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}
export default App;
