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
            <p className='instructions'>Type in a number</p>
            <input type='text' onChange={(e) => handleChange(e)} className='componentInput'/>
            <button onClick={() => transformNumber(number)} className='componentBtn'>Convert!</button>
            {result ? <p className='instructions'>The number {number} converted to Roman numerals is: {result}</p> : ''}
        </>
    )
};

export default Roman