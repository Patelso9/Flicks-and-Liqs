import axios from 'axios';
import React, { useState, useEffect } from 'react'
import './Cocktail.css'
import CocktailComponents from './CocktailComponents';

const Cocktail = () => {

    const [drinks, setDrinks] = useState([])
    const [search, setSearch] = useState('')
    // const [search, setSearch] = useState('')
    
    useEffect(() => {
        getNewDrink();
    },[search])

    const getNewDrink = () => {
        axios.get(`https://www.thecocktaildb.com/api/json/v1/1/random.php`)
        .then(res => {
            console.log(res.data.drinks[0])
            setDrinks(res.data.drinks[0])
        })
        .catch(err => console.log(err, 'error loading s api'))
    }

    const handleChange = async e => {
        e.preventDefault()
        // setDrinks(e.target.value)
        setSearch(e.target.value);
    }
    
      const handleSubmit = async e => {
        e.preventDefault();
        getNewDrink()
        setDrinks([])
      }
    

    return (

        <div>
            <div className='s-box'>
                <form className='s-search'>
                    <button className="s-random" 
                        onChange={handleChange} 
                        onClick={handleSubmit}
                        // name="search" 
                        >Liq</button>
                    <input text="text" 
                        placeholder="search for liq" 
                        // onChange={handleChange}
                        />
                    <button 
                        // onClick={handleSubmit}
                        >Search Liq</button>
                    <button>Save Liq</button>
                </form>
                <hr/>
                <CocktailComponents
                    key={drinks.idDrink}
                    image={drinks.strDrinkThumb}
                    name={drinks.strDrink}
                    ingredient={drinks.strIngredient1}
                    direction={drinks.strInstructions}
                    />        
            </div>
        </div>
    )
}

export default Cocktail
