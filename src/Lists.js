export var savedRecipesList = [
    {
      name: "Chicken Pasta With Tomato and Spinach",
      imgPath: "/image40@2x.png",
      description: "Sample description",
      time: "20 min",
      rating: "5",
      ingredients: [
        {name: "Tomatoes",
        amount: "2"}
        ,{name: "Cabbage",
        amount: "1/2 Head"}
        ,{name: "Cheese ",
        amount: "2 Slices"}
        ,{name: "Chicken Leg",
        amount: "200 g"}
        ,{name: "Penne Pasta",
        amount: "100 g"}
      ]
      , steps: [
        {
          stepName: "First Thing"
          ,stepDescription: "Make food do this first"
          ,stepTime: "5"
          ,stepImgPath: ""
          ,ingList: ["Tomatoes"]
        },
        {
          stepName: "Cut tomatoes"
          , stepDescription: "The next step"
          ,stepTime: "0"
          , stepImgPath: ""
          ,ingList: ["Lettuce"]
        },
        {
          stepName: "Last thing"
          , stepDescription: ""
          ,stepTime: "10"
          , stepImgPath: ""
          ,ingList: ["Tomatoes"]
        },
        {
          stepName: "Hello!!!"
          , stepDescription: "Example desc"
          ,stepTime: "0"
          , stepImgPath: ""
          ,ingList: ["Tomatoes", "Potatoes"]
        }
      ]
    },
    {
        name: "Spice Roasted Chicken with Flavoured rice",
        imgPath: "/rectangle-6468@2x.png",
        description: "Sample description",
        time: "30 min",
        rating: "5",
        ingredients: [
          {name: "Tomatoes",
          amount: "2"}
          ,{name: "Cabbage",
          amount: "1/2 Head"}
          ,{name: "Cheese ",
          amount: "2 Slices"}
          ,{name: "Chicken Leg",
          amount: "200 g"}
          ,{name: "Brown Rice",
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
  export var appendSavedRecipes = function(recipe) {
    savedRecipesList.push(recipe)
};
export var deleteSavedRecipe = function(i) {
  savedRecipesList.splice(i,1)
};


export var groceryList = [
  
  { text: '600g crushed tomatoes', clicked: false },
  { text: '400g ground beef', clicked: false },
  { text: '6 eggs', clicked: false },
  { text: '8 taco shells', clicked: false },
  { text: 'shredded cheddar', clicked: false },
  { text: '400g sea salt', clicked: false },
];
export var myRecipesList = [
    {
      name: "Traditional Spare Ribs Baked",
      imgPath: "/rectangle-6467@2x.png",
      description: "Sample description",
      time: "20 min",
      rating: "5",
      ingredients: [
        {name: "Tomatoes",
        amount: "2"}
        ,{name: "Onions",
        amount: "1/2"}
        ,{name: "Cheese ",
        amount: "2 Slices"}
        ,{name: "Ribs",
        amount: "200 g"}
        ,{name: "parsley",
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
  export var appendMyRecipes = function(recipe) {
    myRecipesList.push(recipe)
};


  export var currentRecipe = {
    name: "Chicken Pasta With Tomato and Spinach",
    imgPath: "/image40@2x.png",
    description: "Sample description",
    time: "20 min",
    rating: "5",
    ingredients: [
      {name: "Tomatoes",
      amount: "2"}
      ,{name: "Cabbage",
      amount: "1/2 head"}
      ,{name: "Cheese ",
      amount: "2 Slices"}
      ,{name: "Chicken Legs",
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

export var updateStepDescription = function(recipeName, stepIndex, newDescription) {

  // Find the recipe in the savedRecipesList array
  const savedRecipe = savedRecipesList.find((r) => r.name === recipeName);

  // If the recipe and the step exist, update the step description
  if (savedRecipe && savedRecipe.steps && savedRecipe.steps[stepIndex]) {
    savedRecipe.steps[stepIndex].stepDescription = newDescription;
  }

  // Find the recipe in the myRecipesList array
  const myRecipe = myRecipesList.find((r) => r.name === recipeName);

  // If the recipe and the step exist, update the step description
  if (myRecipe && myRecipe.steps && myRecipe.steps[stepIndex]) {
    myRecipe.steps[stepIndex].stepDescription = newDescription;
  }
};