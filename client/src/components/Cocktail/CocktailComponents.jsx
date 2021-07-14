import React from 'react'

const CocktailComponents = ({ name, image, ing, direction }) => {
    return (
        <div className="cocktail-container">
                <div className='cocktail-row'>
                <div className="cocktail">
                    <h1>{name}</h1>
                    <img src={image} alt="liq img" />
                    <p>{ing}</p>
                    <p>{direction}</p>
                </div>
            </div>
        </div>
    )
}

export default CocktailComponents
