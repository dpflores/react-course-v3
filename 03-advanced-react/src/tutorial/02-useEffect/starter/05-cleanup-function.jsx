import { useEffect, useState } from "react";

const CleanupFunction = () => {
  const [value, setValue] = useState(false);

  const handleClick = () => {
    setValue(!value);
  };
  return (
    <div>
      <h2>Cleanup function</h2>
      <button className="btn" onClick={handleClick}>
        Toggle
      </button>
      {value && <SomeComponent />}
    </div>
  );
};

const SomeComponent = () => {
  useEffect(() => {
    // console.log("Second component rendered");
    // // Esto seguirá a pesar de que desmontemos el componente
    // const intId = setInterval(() => {
    //   console.log("Hello from interval");
    // }, 1000);
    // // Pero con esto se limpia (cleanup)
    // return () => {
    //   clearInterval(intId);
    //   console.log("cleanup");
    // };

    const someFunc = () => {
      // some logic
    };
    window.addEventListener("scroll", someFunc);

    return () => window.removeEventListener("scroll", someFunc);
  }, []);
  return <h2>Second Component</h2>;
};

export default CleanupFunction;
