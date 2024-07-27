import { useState } from "react";

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "Del",
    age: "23",
    hobby: "programming",
  });

  const displayPerson = () => {
    // setPerson({ name: "Del Piero", age: 23, hobby: "Football" });  /override
    setPerson({ ...person, name: "Del Piero" });
  };
  return (
    <div>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h3>{person.hobby}</h3>
      <button className="btn" onClick={displayPerson}>
        Show Del Piero
      </button>
    </div>
  );
};

export default UseStateObject;
