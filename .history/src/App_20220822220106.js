
import React, {useState} from 'react'
import "./App.css";

function App() {

  const [form, setForm] = React.useState({
    email:'',
    password:'',
  })
  const [error, setError] = React.useState(null)

  const validateForm = (form) => {
    if(!form.email){
      return "E-mail is required"
    } else if (!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i.test(form.email)){
      return "Bad email"
    }
    if(!form.password){
      return "Password is required"
    } else if (form.password.length < 8){
      return "Password is too short"
    }
    return null
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errorMsg = validateForm(form)
    if(errorMsg){
      setError
    }
    console.log("sended: ", form)
  }

  const updateInput = async (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
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
