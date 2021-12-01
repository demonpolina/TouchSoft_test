import { useState } from "react";
import { Counter } from "./counter";

export const MainCounter = () => {

    const [counter, setCounter] = useState(0);

    const List = () =>{
        <Counter /> 
    }

    const handleCounters = () => {
        setCounter(counter+1);
    }

    return (
        <div>

            <div className="main__buttons">
                <button onClick={handleCounters()}>Add count</button>
                <button>Reset</button>
                <p>{counter}</p>
            </div>

            <List />



        </div>
    )
}