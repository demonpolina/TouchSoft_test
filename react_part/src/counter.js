import { useState } from "react";

export const Counter = () => {
  const [state, setState] = useState(0);
  const [parity, setParity] = useState('');

  const handleInc = () => {
    setState(state + 1);
    handleParity();
  };

  const handleDec = () => {
      if ( state > 0) {
        setState(state - 1);
        }
        handleParity();
  };

  const handleRes = () => {
      setState(0);
  }


  const handleParity = () => {

      if (state % 2 === 0) {
          setParity('Введено нечётное число.');
      }

      else{ 
          setParity('Введено чётное число.');
        }
  };


  return (
    <div className="counter">
        <div className="block__state">
            <p className="state">{state}</p>
        </div>
        
        <div className="block__parity">
            <p> {parity} </p>

        </div>
      <div className="block__buttons">
          <button onClick={handleInc}>+</button>
            <button onClick={handleRes}>Reset</button>
            <button onClick={handleDec}>-</button>
      </div>
    </div>
  );
};
