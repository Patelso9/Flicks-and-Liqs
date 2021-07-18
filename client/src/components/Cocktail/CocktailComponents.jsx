import React from 'react'

const CocktailComponents = ({ name, image, direction, i1, i2, i3, i4, i5, i6, i7, i8 }) => {
    return (
        <div className="cocktail-container">
                <div className='cocktail-row'>
                <div className="cocktail">
                    <h4>{name}</h4>
                    <img src={image} alt="liq img" />
                    <h5>Preperation instructions:</h5>
                    <p>{direction}</p>
                    <h5>Ingredients:</h5>
                    <ul>
                        <li>{i1}</li>
                        <li>{i2}</li>
                        <li>{i3}</li>
                        <li>{i4}</li>
                        <li>{i5}</li>
                        <li>{i6}</li>
                        <li>{i7}</li>
                        <li>{i8}</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default CocktailComponents
