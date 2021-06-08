import React from 'react';
function Pokedexcard ({name,id,type,base_experience}){
    return (
        <div className="Pokedex-card">
            <h3 className="card-title">{name}</h3>
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} alt="img"/>
            <p>Type:{type}</p>
            <p>EXP:{base_experience}</p>
        </div>
    )
}

export default Pokedexcard