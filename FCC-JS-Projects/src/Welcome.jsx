import { useState } from 'react'

import Palindrome from './Palindrome';
import Roman from './Roman';
import Cipher from './Cipher';

const Welcome = () => {
  const [project, setProject] = useState("");

  const handleValue = (e) => {
    setProject(e.target.value)
  }

  return (
    <div id='welcomeCont'>
      <section>
        <h1 id="title">Javascript Projects Bundle</h1>
        <p id="about">These are some of the projects I completed to get the "JavaScript Algorithms and Data Structures" certificate in freeCodeCamp</p>
      </section>
      <section id='buttonsCont'>
        <button className='selectProject' value='palindrome' onClick={(e) => handleValue(e)}>Palindrome Checker</button>
        <button className='selectProject' value='roman' onClick={(e) => handleValue(e)}>Roman Numeral Converter</button>
        <button className='selectProject' value='cipher' onClick={(e) => handleValue(e)}>Cipher</button>
      </section>
      <section id='projectCont'>
        {project === 'palindrome' ? <Palindrome/> 
        : project === 'roman' ? <Roman/>
        : project === 'cipher' ? <Cipher/>
        : ''}
      </section>
    </div>
  )
}

export default Welcome
