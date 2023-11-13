import "./App.css";
import { DefaultColorPicker } from "@thednp/react-color-picker";
import "@thednp/react-color-picker/style.css";

function App() {
  return (
    <div className="App">
      <DefaultColorPicker
        value="turquoise"
        onChange={(color) => console.log(color)}
      />
      ;
    </div>
  );
}

export default App;
