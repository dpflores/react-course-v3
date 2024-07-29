import Starter from "./tutorial/03-conditional-rendering/starter/03-hooks-rule";
import Final from "./tutorial/03-conditional-rendering/final/03-hooks-rule";

function App() {
  return (
    <div className="container">
      <h2>Advanced React</h2>
      <h3 style={{ color: "red" }}>Example</h3>
      <Final></Final>
      <h3 style={{ color: "red" }}>Implementation</h3>
      <Starter />
    </div>
  );
}

export default App;
