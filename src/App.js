import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      {" "}
      first React Test Casses
      <img title="ai generated" src={require("./logo.svg")} alt=""></img>
      <input
        type="text"
        placeholder="hey input box"
        name="username"
        id="userid"
        // value="bharat"
      />
    </div>
  );
}

export default App;
