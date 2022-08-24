import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <p>Welcome</p>
     
      <form>
  <label>
    Imię:
    <input type="text" name="name" />
  </label>
  <input type="submit" value="Wyślij" />
</form>
    
    </div>
  );
}

export default App;
