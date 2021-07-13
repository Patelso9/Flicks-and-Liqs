import axios from 'axios';
import React, { useState, useEffect } from 'react'
import './Cocktail.css'

const Cocktail = () => {

    const [ing, setIng] = useState([]);

    useEffect(()=>
       axios
       .get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?${selector}=${ingredient}`)
    )

    var selector = [{
        a: alcoholic,
        i: ingretient
    }]


    return (
        <div>
            
        </div>
    )
}

export default Cocktail
