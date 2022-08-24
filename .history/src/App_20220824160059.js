
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

function App(){
  const initialState = {
    gender: 'male',
    name: '',
    surname: '',
    description: '',
    nameError: null,
    surnameError: null
  };
  
  const onRadioClick = (e) => {
    setState({
      [e.target.name]: e.target.value
    })
  }
  
  validate = (fields) => {
    return fields.reduce((acc, field) => {
      const { name, value } = field;
      if (!value || value.lenght === 0) {
        acc[name] = 'This field is required';
      } else if (!/^[a-z]+$/i.test(value)) {
        acc[name] = 'Field should contain only letters';
      }
      return acc;
    }, {})
  }
  
  onInputChange = (e) => {
    const { name, value } = e.target;
    const { [name]: error } = validate([{name, value}]);
    if (error) {
      setState({
        [name]: value,
        [`${name}Error`]: error
      });
    } else {
      setState({
        [name]: value,
        [`${name}Error`]: null
      });
    }
  }
  
  onDescriptionChange = (e) => setState({ description: e.target.value })
  
  onSubmit = (e) => {
    e.preventDefault();
    const errors = validate([
      {name: 'name', value: state.name},
      {name: 'surname', value: state.surname}
    ]);
    if (Object.keys(errors).length !== 0) {
      const newState = Object.keys(errors).reduce((acc, field) => {
        acc[`${field}Error`] = errors[field];
        return acc;
      }, {})
      setState(newState);
    } else {
      alert(`
        name: ${state.name}
        surname: ${state.surname}
        gender: ${state.gender}
      `)
    }  
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
