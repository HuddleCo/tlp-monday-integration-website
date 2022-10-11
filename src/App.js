import "./App.css";
import Input from "./Input";
import logo from "./images/HuddleCo-HeaderLogo-v2.png";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div style={{ backgroundColor: "#b8d4b4" }} className="App ml-4 ">
      <img src={logo} alt="Logo" style={{ height: "12vh", width: "20vw" }} />
      <Input />
    </div>
  );
}

export default App;
