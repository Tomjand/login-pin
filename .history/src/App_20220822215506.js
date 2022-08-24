
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

  const updateInput = async (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const validateForm = (form) => {
    if(!form.email){
      return "E-mail is required"
    } else if ()
    return null
  }

  return (
    <div className="App">
      <p>PIN</p>

      <form onSubmit={handleSubmit}>
        <label>
          e-mail:
          <input type="email" name="email" onChange={updateInput}/>
        </label>

        <label>
          password:
          <input type="password" name="password" onChange={updateInput}/>
        </label>
        <input type="submit" value="Login" />
      </form>
    </div>
  );
}

export default App;
