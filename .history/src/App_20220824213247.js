
import React, {useState} from 'react'
import "./App.css";
import { useForm, SubmitHandler } from "react-hook-form";
import { RadioButton,Button, Form,FormGroup,FieldGroup,InputField, TextAreaField } from "@livechat/design-system";

const emailValidation = {
    required: "required email", 
    minLength: {
      value: 2,
      message: "Minimum length 2"
    }
}

function App(){
 


 
  
  const onSubmit = (e) => {
    e.preventDefault();
    const errors = validate([
      // {name: 'name', value: state.name},
      // {name: 'surname', value: state.surname}
    ]);
    if (Object.keys(errors).length !== 0) {
      const newState = Object.keys(errors).reduce((acc, field) => {
        acc[`${field}Error`] = errors[field];
        return acc;
      }, {})
      // setState(newState);
    } else {
      // alert(`
      //   // name: ${state.name}
      //   // surname: ${state.surname}
      //   gender: ${state.gender}
      // `)
    } 
    return (
   <h1>test</h1>
    ) 
  }
}

// function App() {

//   const { register, handleSubmit, formState:{errors} } = useForm({
//     defaultValue:{
//       email:"",
//       password:""
//     }
//   });
  


//   const onSubmit = (data) => {
//     console.log("sended: ", data)
//   }

//   console.log("errors: ", errors)

//   return (
//     <div className="App">
//       <p>PIN</p>
      
//       <Button kind="primary">Primary Button</Button>
//       <Button kind="destructive">Destructive Button</Button>
//       <form onSubmit={handleSubmit((d)=>{console.log(d)})}>
//         <label>
//           e-mail:
//           <input type="email" {...register("email", emailValidation)}
//             placeholder = "E-mail"
//             />
//             <p>{errors.email?.message}</p>
//         </label>

//         <label>
//           password:
//           <input {...register("password", {
//             required: "required pass", 
//             minLength: {
//               value: 4,
//               message: "Minimum length 4"
//             }
//             })} />
//           <p>{errors.password?.message}</p>
//         </label>
//         <input type="submit" value="Login" />
//       </form>
//     </div>
//   );
// }

export default App;
