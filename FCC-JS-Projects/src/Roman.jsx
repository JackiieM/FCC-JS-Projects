import { useState } from "react";

import { convertToRoman } from "./logic";

const Roman = () => {
    const [number, setNumber] = useState();
    const [result, setResult] = useState('');

    const handleChange = (e) => {
        setNumber(e.target.value)
        setResult()
    };

    const transformNumber = (input) => {
        setResult(convertToRoman(input))
    }
    return (
        <>
            <p>Type in a number</p>
            <input type='text' onChange={(e) => handleChange(e)}/>
            <button onClick={() => transformNumber(number)}>Transform!</button>
            {result ? <p>The number {number} converted to Roman numberals is: {result}</p> : ''}
        </>
    )
};

export default Roman