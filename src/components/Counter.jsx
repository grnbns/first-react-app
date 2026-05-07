import { useState, useEffect } from 'react';

function Counter() {
    const [array, setArray] = useState([]);
    useEffect(() => console.log("Counter has updated"), [array])
    return (
        <div>
            <h1>
                {array.toString()}
            </h1>
            <button onClick={() => {
                setArray((prevArray) => {
                    return [...prevArray, '+1']
                })
            }}
            >
                Inc
            </button>
            <button onClick={() => {
                setArray((prevArray) => {
                    return [...prevArray, '-1']
                })
            }}
            >
                Dec
            </button>
            <button>Reset</button>
        </div>
    );
}

export default Counter;