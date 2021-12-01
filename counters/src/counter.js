import { useState } from "react";

export const Counter = () => {


    const handleItem = () => {

        //list.appendChild(<Item />);

        console.log('Item added');
    }

    return (
        <div>
            {handleItem}
            <p>fvgbhj</p>
        </div>
    )
}

export const Item = () => {

    const [state, setState] = useState(0);

    console.log('Item is adding');
    const handleInc = () => {
        setState(state + 1);
    };
    
    const handleDec = () => {
        if ( state > 0) {
            setState(state - 1);
        }
    };

    const handleDel = () => {

    }

    return (
        <div>
             <p className="state">{state}</p>
             <button onClick={handleInc}>+</button>
            <button onClick={handleDec}>-</button>
            <button onClick={handleDel}>Delete</button>
        </div>
    )
}