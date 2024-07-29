import { useState } from "react";

const UseStateGotcha = () => {
  const [value, setValue] = useState(0);
  const increaseValue = () => {
    // Esta es una forma de acceder al último valor
    // setValue((currentState) => {
    //   const newState = currentState + 1;
    //   console.log(newState);
    //   return newState;
    // });

    // Si presionamos 5 veces, se actualizarán
    setTimeout(() => {
      setValue((currentState) => {
        return currentState + 1;
      });
    }, 3000);
  };
  return (
    <div>
      <h1>{value}</h1>
      <button className="btn" onClick={increaseValue}>
        Increase
      </button>
    </div>
  );
};

export default UseStateGotcha;
