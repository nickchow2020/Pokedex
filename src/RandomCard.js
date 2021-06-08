import React from 'react';
import Pokedexcard from "./Pokedexcard"

function RandomCard({data,total,higher}){
    return(
        <>
            <h3>Total:{total}</h3>
            <div className="Pokedex">
                {data.map(d => <Pokedexcard  key={d.id} name={d.name} id={d.id} type={d.type} base_experience={d.base_experience}/>)}
            </div>
            {
                higher ? <h1 className="win">THIS HAND WINS!</h1> : null
            }
            
        </>
    )
}



export default RandomCard