import axios from 'axios';
import React, { useState, useEffect } from 'react'
import './Cocktail.css'
import CocktailComponents from './CocktailComponents';

const Cocktail = () => {

    var[drink, setDrink] = useState([])
    
    useEffect(() => {
        axios
        .get(`https://www.thecocktaildb.com/api/json/v1/1/random.php`)
        .then(res => {
            console.log(res.data)
            setDrink(res.data)
        })
        .catch(err => console.log(err))
    }, [])

    const handleSubmit= e => {
        const reloadDrinks = e.target.value
        setDrink(reloadDrinks)
    }


    return (
        <div className="drink-category">
            <div className="liq-header">
                <button onChange={handleSubmit}>Liq</button>

                <input type="text" placeholder="Search for a drink" />
                <button>Search Liq</button>
                
                <button>Save Liq</button>
            </div>
         <CocktailComponents
                    id={drink.drinks[0].idDrink}
                    image={drink.drinks[0].strDrinkThumb}
                    name={drink.drinks[0].strDrink}
                    ing={drink.drinks[0].strIngredient1}
                    direction={drink.drinks[0].strInstructions}
                />
        </div>
    )
}

export default Cocktail
