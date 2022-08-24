
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
 


 
  

    return (
      <Form
      onSubmit={onSubmit}
      labelText='Settings'
      helperText='Use form layout to arrange fields within a form using standard spacing. We recomme stacking fields vertically for easier scanning and faster completion, but you can also arrange them vertically.'
      noValidate
      formFooter={<Button kind="primary" submit>Save changes</Button>}
    >
    ) 
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
