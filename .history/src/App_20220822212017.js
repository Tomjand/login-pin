import logo from "./logo.svg";
import "./App.css";

function App() {


  const handleSubmit = async (e) {
    e.preventDefault();
    console.log()
  }

  return (
    <div className="App">
      <p>PIN</p>

      <form>
        <label>
          e-mail:
          <input type="email" name="email" />
        </label>

        <label>
          password:
          <input type="password" name="password" />
        </label>
        <input type="submit" value="Login" />
      </form>
    </div>
  );
}

export default App;
