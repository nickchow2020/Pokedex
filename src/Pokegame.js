import React from 'react';
import "./Pokedex.css"
import RandomCard from './RandomCard'
import shuffle from "./helper"

function Pokegame({data}){

    const shuffleData = shuffle(data)
    const sectionOne = shuffleData.slice(0,4)
    const sectionTwo = shuffleData.slice(4)

    const totalOne = sectionOne.reduce((acc,next) =>{
        return acc + next.base_experience
    },0)

    const totalTwo = sectionTwo.reduce((acc,next) =>{
        return acc + next.base_experience
    },0)

    const higherTop = totalOne > totalTwo
    const higherBot = totalOne < totalTwo

    return (
        <>
            <h1 className='Pokedex-title'>Pokedex</h1>
            <RandomCard data={sectionOne} total={totalOne} higher={higherTop}/>
            <RandomCard data={sectionTwo} total={totalTwo} higher={higherBot}/>
        </>
    )
}


export default Pokegame;