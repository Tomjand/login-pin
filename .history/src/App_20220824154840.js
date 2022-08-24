
import React, {useState} from 'react'
import "./App.css";
import { useForm, SubmitHandler } from "react-hook-form";
import { Button } from "@livechat/design-system";

const emailValidation = {
    required: "required email", 
    minLength: {
      value: 2,
      message: "Minimum length 2"
    }
}

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
return (<Button kind="primary">Primary Button</Button>) }

export default App;
