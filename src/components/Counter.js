import React, {useEffect} from 'react';
import { useState } from 'react';
import './Counter.css';
function Counter (){
    let count = 0;
    useEffect(() => {
        window.alert("i am clicked")
    });
    const [currentstate, updatedstate] = useState(count);
    const handleclick = () => {
        updatedstate(currentstate + 1)
    };
    return(
        <>
        <div className = "counter_parent">
            <div className='main-div'>
            <div className="body">
            <h1>cerebro</h1>
            </div>

            <button onClick={handleclick}>{currentstate}</button>
            </div>
        </div>
        </>
    );
}
export default Counter;