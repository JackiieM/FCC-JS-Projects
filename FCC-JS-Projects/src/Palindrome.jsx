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
            <p>Type in your word/phrase</p>
            <input type='text' onChange={(e) => handleChange(e)}/>
            <button onClick={() => isPalindrome(textInput)}>Check!</button>
            <p>Is it a palindrome?</p>
            {result ? <p>Yes! {textInput} is a ✨palindrome✨</p> : result === false ? <p>No, {textInput} is not a palindrome 😞</p> : ''}
        </>
    )
};

export default Palindrome