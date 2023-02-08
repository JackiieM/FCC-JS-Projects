const Cipher = () => {
    return (
        <>
            <p className='instructions'>Type in your message</p>
            <input type='text' className='componentInput'/>
            <input type='range' min="1" max='25' value='13' step='1'/>
            <button className='componentBtn'>Cipher</button>
        </>
    )
};

export default Cipher