import { useState } from "react";
import { palindromeChecker } from "./logic";

const Palindrome = () => {
    const [textInput, setTextInput] = useState('');
    const [result, setResult] = useState('');

    const handleChange = (e) => {
        setTextInput(e.target.value)
        setResult('')
    };
    const isPalindrome = (input) => {
        setResult(palindromeChecker(input))
    };
    return (
        <>
            <p className='instructions'>Type in your word/phrase</p>
            <input type='text' onChange={(e) => handleChange(e)} className='componentInput'/>
            <button onClick={() => isPalindrome(textInput)} className='componentBtn'>Check!</button>
            <p className='instructions'>Is it a palindrome?</p>
            {result ? <p className='instructions'>Yes! '{textInput}' is a ✨palindrome✨</p> 
            : result === false ? <p className='instructions'>No, '{textInput}' is not a palindrome 😞</p> : ''}
        </>
    )
};

export default Palindrome