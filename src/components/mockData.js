export const mockdata = () => {
    return new Promise((resolve, reject) => {
        resolve(data());
    });
};

const data = () => {
    return [
        {
            name: "Mushroom Wild",
            image: "/images/MushroomWild.jpg",
            ingredients: ["Mushroom"],
            price: 123.0
        },
        {
            name: "Meat Supreme",
            image: "/images/MeatSupreme.jpg",
            ingredients: [
                "Chicken",
                "Bacon",
                "Mushroom",
                "Onion",
                "Ham",
                "Pork",
                "Beef",
                "Pepperoni",
                "Tomato Sauce"
            ],
            price: 169.0
        },
        {
            name: "Cheese Lover (Tomato Sauce)",
            image: "/images/CheeseLover.jpg",
            ingredients: ["Mozzarella Cheese", "Tomato Sauce"],
            price: 183.0
        },
        {
            name: "Hawaiian",
            image: "/images/Hawaiian.jpg",
            ingredients: ["Pepperoni", "Beef", "Pineapple"],
            price: 203.0
        }
    ];
};