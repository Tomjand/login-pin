
import React, {useState} from 'react'
import "./App.css";
import { useForm, SubmitHandler } from "react-hook-form";


function App() {

  const { register, handleSubmit, formState:{errors} } = useForm({
    defaultValue:{
      email:"",
      password:""
    }
  });
  


  const onSubmit = (data) => {
    console.log("sended: ", data)
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
            <p>{errors.email?.message}</p>
          {/* {error==="E-mail is required" && <p>e-mail is required</p>} */}
        </label>

        <label>
          password:
          <input type="password"  {...register("password")} />
          <p>{errors.password?.message}</p>
          {/* {error==="Password is required" && <p>Password is required</p>} */}
          {/* {error==="Password is too short" && <p>password is too short</p>} */}
        </label>
        <input type="submit" value="Login" />
      </form>
    </div>
  );
}

export default App;
