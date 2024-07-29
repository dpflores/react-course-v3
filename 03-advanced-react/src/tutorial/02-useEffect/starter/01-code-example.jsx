import { useState } from "react";

const CodeExample = () => {
  const [value, setValue] = useState(0);

  const sayHello = () => {
    console.log("Hello There");
    // Cuidado con un loop infinito
    setValue(value + 1); // Genera el loop infinito
  };
  sayHello(); // Se ejecuta cada renderización
  return (
    <div>
      <h1>value : {value}</h1>
      <button className="btn" onClick={() => setValue(value + 1)}>
        click me
      </button>
    </div>
  );
};
export default CodeExample;
