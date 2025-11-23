import { useState, useEffect } from "react";

export function Counter(props) {
    const [numOfClicks, setNumOfClicks] = useState(0);
    const [firstName, setFirstName] = useState("Brian");
    const [lastName, setLastName] = useState("Blosser");

    useEffect(function firstEffectCreate() {
        console.log(`firstEffect numOfClicks: ${numOfClicks}`)
    }, [numOfClicks])
    useEffect(function secondEffectCreate() {
        console.log(`secondEffect numOfClicks: ${numOfClicks}`)
    }, [numOfClicks])

    const handleClick = () => {
        setNumOfClicks(numOfClicks + 1)
    }

    return (
        <article>
            <h2>Counter {props.name}</h2>
            <p>You clicked {numOfClicks} times</p>
            <button onClick={handleClick}>Increment</button>
        </article>
    )
}