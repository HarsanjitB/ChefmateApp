export var savedRecipesList = [
    {
      name: "Chicken Pasta With Tomato and Spinach",
      imgPath: "/image40@2x.png",
      time: "20 min",
      rating: "5",
      ingredients: [
        {name: "Tomatoes",
        amount: "2"}
        ,{name: "Cabbage",
        amount: "1/2"}
        ,{name: "Cheese ",
        amount: "2 Slices"}
        ,{name: "Chicken Breast",
        amount: "200 g"}
        ,{name: "Penne Pasta",
        amount: "100 g"}
      ]
      , steps: [
        {
          stepName: "First Thing"
          , stepDescription: "Make food do this first"
          ,stepTime: "5 min"
          , stepImgPath: ""
          ,ingList: ["Tomatoes"]
        }
      ]
    },
    {
        name: "Spice Roasted Chicken with Flavoured rice",
        imgPath: "/rectangle-6468@2x.png",
        time: "30 min",
        rating: "5",
        ingredients: [
          {name: "Tomatoes",
          amount: "2"}
          ,{name: "Cabbage",
          amount: "1/2"}
          ,{name: "Cheese ",
          amount: "2 Slices"}
          ,{name: "Chicken Breast",
          amount: "200 g"}
          ,{name: "Penne Pasta",
          amount: "100 g"}
        ]
        , steps: [
          {
            stepName: "First Thing"
            , stepDescription: "Make food do this first"
            ,stepTime: "5 min"
            , stepImgPath: ""
            ,ingList: ["Tomatoes"]
          }
        ]
      }
  ]
  export var currentRecipe = {
    name: "Chicken Pasta With Tomato and Spinach",
    imgPath: "/image40@2x.png",
    time: "20 min",
    rating: "5",
    ingredients: [
      {name: "Tomatoes",
      amount: "2"}
      ,{name: "Cabbage",
      amount: "1/2"}
      ,{name: "Cheese ",
      amount: "2 Slices"}
      ,{name: "Chicken Breast",
      amount: "200 g"}
      ,{name: "Penne Pasta",
      amount: "100 g"}
    ]
    , steps: [
      {
        stepName: "First Thing"
        , stepDescription: "Make food do this first"
        ,stepTime: "5 min"
        , stepImgPath: ""
        ,ingList: ["Tomatoes"]
      }
    ]
  };
  export var setCurrentRecipe = function(recipe) {
    currentRecipe = recipe;
};