
import React, {useState} from 'react'
import "./App.css";
import { useForm, SubmitHandler } from "react-hook-form";


function App() {
  // const [error, setError] = useState(null)
  // const [form, setForm] = useState({
  //   email:'',
  //   password:'',
  // })
  const { register, handleSubmit, formState:{errors} } = useForm({
    defaultValue:{
      email:'asd'
    }
  });
  

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

  const onSubmit = (data) => {
    console.log("sended: ", data)
  }

  

  const updateInput = async (e) => {
    // setForm({
    //   ...form,
    //   [e.target.name]: e.target.value
    // })
  }

  console.log("errors: ", errors)

  return (
    <div className="App">
      <p>PIN</p>

      <form onSubmit={handleSubmit((d)=>{console.log(d)})}>
        <label>
          e-mail:
          <input type="email" {...register("email", {
            required: "required", 
            minLength: {
              value: 2,
              message: "Minimum length 2"
            }
            })}
            placeholder = "E-mail"
            />
          {/* {error==="E-mail is required" && <p>e-mail is required</p>} */}
        </label>

        <label>
          password:
          <input type="password"  {...register("password")} />
          {/* {error==="Password is required" && <p>Password is required</p>} */}
          {/* {error==="Password is too short" && <p>password is too short</p>} */}
        </label>
        <input type="submit" value="Login" />
      </form>
    </div>
  );
}

export default App;
