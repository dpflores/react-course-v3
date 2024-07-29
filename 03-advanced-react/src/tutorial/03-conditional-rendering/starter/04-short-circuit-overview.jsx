import { useState } from "react";

const ShortCircuitOverview = () => {
  const [value, setValue] = useState("");
  const [secondValue, setSecondValue] = useState("elovermac");

  return (
    <div>
      <h4>Falsy OR: {value || "hello world"}</h4>
      <h4>Falsy AND: {value && "hello world"}</h4>
      <h4>Thruty OR: {secondValue || "hello world"}</h4>
      <h4>Thruty AND: {secondValue && "hello world"}</h4>
    </div>
  );
};
export default ShortCircuitOverview;
