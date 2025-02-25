export const cooksy = [
    {
        id : 1,
        title : "Chicken Biriyani",
        time : '10 min',
        type : false, //veg or non veg
        recepie : 
        `Do this
        Do that
        Do thereafter
        Done!!`,
        desc:'A spicy blend of masala cooked in medium flame over dazzlingly marinated chicken',
        img : require("../images/biriyani.png"),
        difficulty: 'Easy',
        category : ['Popular','Dinner']
    },
    {
        id: 2,
        title: "Chicken Momos",
        time: "20 min",
        type: false, // non-veg
        recepie: `Prepare dough\nMake filling with minced chicken/veg\nWrap and steam for 15 mins\nServe with spicy chutney`,
        desc: "Steamed dumplings filled with spicy minced meat, served with a tangy dip",
        img: require("../images/momo.png"),
        difficulty: "Medium",
        category: ["Snacks", "Popular"],
    },
    {
        id: 3,
        title: "Margherita Pizza",
        time: "25 min",
        type: true, // veg
        recepie: `Prepare dough\nSpread tomato sauce\nAdd cheese & basil\nBake at 200°C for 15 mins`,
        desc: "Classic Italian pizza topped with fresh tomatoes, mozzarella, and basil",
        img: require("../images/pizza.png"),
        difficulty: "Medium",
        category: ["Dinner", "Popular"],
    },
    
    {
        id: 4,
        title: "Classic Coffee",
        time: '5 min',
        type: true, // Veg
        recepie: 
        `1. Heat milk or water in a saucepan.
        2. Add coffee powder and sugar, stirring well.
        3. Bring to a gentle simmer and pour into a cup.
        4. Froth the milk for extra creaminess if desired.
        5. Serve hot and enjoy!`,
        desc: 'A rich and aromatic coffee to kickstart your day.',
        img: require("../images/coffee.png"),
        difficulty: 'Easy',
        category: ['Beverages', 'Popular']
    },
    {
        id: 5,
        title: "Vanilla Ice Cream",
        time: '5 min',
        type: true, // Veg
        recepie: 
        `1. Mix milk, cream, sugar, and vanilla extract.
        2. Stir until the sugar dissolves completely.
        3. Freeze for 2-3 hours, stirring every 30 minutes.
        4. Serve chilled and enjoy!`,
        desc: 'A creamy and smooth vanilla delight, perfect for summer cravings.',
        img: require("../images/icecream.png"),
        difficulty: 'Easy',
        category: ['Desserts', 'Popular']
    },
    {
        id: 6,
        title: "Pancakes",
        time: "15 min",
        type: true, // veg
        recepie: `Mix flour, eggs, milk, and sugar\nPour batter on a hot pan\nFlip and serve with syrup`,
        desc: "Fluffy golden pancakes, perfect for breakfast",
        img: require("../images/pancake.png"),
        difficulty: "Easy",
        category: ["Breakfast", "Popular"],
    },
]

export const recipeCategories = [
    { id: "1", name: "Popular" },
    { id: "2", name: "Dinner" },
    { id: "3", name: "Desserts" },
    { id: "4", name: "Beverages" },
    { id: "5", name: "Breakfast" },
    { id: "6", name: "Snacks" },
    { id: "7", name: "Salads" }
  ];

  export const AppUser = 'Nitu'

  export const sliderData=[
    require("../images/carousel/image1.jpg"),
    require("../images/carousel/image2.jpg"),
    require("../images/carousel/image3.jpg")
  ]