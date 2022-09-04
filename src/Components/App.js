import "../App.css";
import useGenerateRandomColor from "../Components/useGenerateRandomColor";

function App() {
  const { color, generateRandomColor } = useGenerateRandomColor();

  const textColor = {
    color: "#" + color,
  };

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <h2 style={textColor}>Welcome to React</h2>
        </div>

        <div>
          <button onClick={generateRandomColor}>Click</button>
        </div>
      </header>
    </div>
  );
}

export default App;
