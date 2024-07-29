import { useState } from "react";

const ToggleChallenge = () => {
  const [value, setValue] = useState(false);
  // const handleClick = () => {
  //   setValue(!value);
  // };
  return (
    <div>
      <button
        className="btn"
        onClick={() => {
          setValue(!value);
        }}
      >
        Toggle
      </button>
      {value && <Alert />}
    </div>
  );
};

const Alert = () => {
  return <div className="alert alert-danger">Hello world</div>;
};
export default ToggleChallenge;
