
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
          <input {...register("email", {
            required: "required", 
            minLength: {
              value: 2,
              message: "Minimum length 2"
            }
            })}
            placeholder = "E-mail"
            />
            <p>{errors.email?.message}</p>
        </label>

        <label>
          password:
          <input {...register("password", {
            required: "required", 
            minLength: {
              value: 2,
              message: "Minimum length 4"
            }
            })} />
          <p>{errors.password?.message}</p>
        </label>
        <input type="submit" value="Login" />
      </form>
    </div>
  );
}

export default App;
