import React, { useState, useEffect }  from 'react'

const CocktailCustom = () => {

    var[type, setType] = useState([])
    
    useEffect(() => {
        axios
        .get(`https://www.thecocktaildb.com/api/json/v1/1/list.php?${drinkFilter}=list`)
        .then(res => {
            setType(res.data)
        })
        .catch(err => console.log(err))
    })

    const filteredCocktails = type.filter(drinks => 
        d)

    return (
        <div className="drink-category">
            <h1>Drink Category</h1>
            <h3>${type.name}</h3>

            
        </div>
    )
}

export default CocktailCustom

