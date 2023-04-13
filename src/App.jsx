import React, {useState, useEffect} from 'react'
import Die from './Die'

export default function(){

    function allNewDice(){
        let dice = [];
        for(let i=0; i < 10; i++){
            dice.push({
                value: Math.floor(Math.random()*6 + 1), 
                isHeld: false})
        }
        return dice
    }
    
    const [allDice, setallDice] = useState(allNewDice())

    const dieElements = allDice.map(die => <Die value = {die.value}/>);

    function rollDice(){
        setallDice(allNewDice)
    }

    return(
        <main>
            <div id="desc">
            <h1>Tenzies</h1>
            <p>hellooooo</p>
            </div>
            <div id="die-grid">
                {dieElements}
            </div>
            <button id='roll-dice' onClick={rollDice}>Roll</button>
        </main>
    )
}