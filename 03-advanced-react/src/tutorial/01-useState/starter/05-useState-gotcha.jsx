import { useState } from "react";

const UseStateGotcha = () => {
  const [value, setValue] = useState(0);
  const increaseValue = () => {
    setValue(value + 1);
    console.log(value);
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
