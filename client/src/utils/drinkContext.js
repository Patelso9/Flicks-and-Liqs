import React, { useState, useEffect }  from 'react'

// create theme
export const drinkContext = React.createContext();

// create custom hook for easy access to drinkContext
export const useDrink = () => useContext(drinkContext);

//theme provider using children objects
export default function drinkFunction({ children })
    const [type, setType] = useState([
        {
            id: 'a',
            name: 'alc',
            key: 'strAlcoholic',
            question: "Do you prefer drinks that are: "
        },
        {
            id: 'c',
            name: 'category',
            key: "strCategory",
            question: "What kind of drinks interest you?"
        },
        {
            id: 'g',
            name: 'glass',
            key: 'strGlass',
            question: "Do you have a glassware preference?"
        },
        {
            id: 'i',
            name: 'ingredient',
            key: 'strIngredient1',
            question: "Do you have a liquir preference?"
        },
    ]);

