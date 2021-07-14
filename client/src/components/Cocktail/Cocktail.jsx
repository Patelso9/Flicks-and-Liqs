import axios from 'axios';
import React, { useState, useEffect } from 'react'
import './Cocktail.css'
import CocktailComponents from './CocktailComponents';

const Cocktail = () => {

    var[drink, setDrink] = useState([])
    
    useEffect(() => {
        axios.get(`https://www.thecocktaildb.com/api/json/v1/1/random.php`)
        .then(res => {
            console.log(res.data)
            setDrink(res.data)
        })
        .catch(err => console.log(err, 'error loading drink api'))
    }, [])

    const handleSubmit = e => {
        setDrink(e.target.value)
    }

    return (

        <div>
            <div className='drink-box'>
                <button className="drink-random">Liq</button>
                <form className='drink-search' onChange={handleSubmit}>
                    <input text="text" placeholder="search for liq" />
                    <button>Search Liq</button>
                    <button>Save Liq</button>
                </form>
                <hr/>
                <CocktailComponents
                    key={drink.drinks[0].idDrink}
                    image={drink.drinks[0].strDrinkThumb}
                    name={drink.drinks[0].strDrink}
                    ing={drink.drinks[0].strIngredient1}
                    direction={drink.drinks[0].strInstructions}
                    />        
            </div>
        </div>
    )
}

export default Cocktail
