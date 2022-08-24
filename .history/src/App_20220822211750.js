import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <p>PIN</p>

      <form>
        <label>
          e-mail:
          <input type="email" name="email" />
        </label>

        <label>
          nickname:
          <input type="text" name="nickname" />
        </label>
        <input type="submit" value="Wyślij" />
      </form>
    </div>
  );
}

export default App;
