
import React, {useState} from 'react'
import "./App.css";

function App() {

  const [form, setForm] = React.useState({
    email:'',
    password:'',
  })
  const [error, setError] = React.useState(null)


  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("sended: ", form)
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
