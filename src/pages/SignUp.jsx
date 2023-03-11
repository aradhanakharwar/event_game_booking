import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { auth } from '../firebase/Firebase';

export default function SignUp() {
    const initialValues = {
        name: "",
        email: "",
        password: ""
    };

    const [values, setValues] = useState(initialValues)
    console.log(values);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value,
        });
    };

    const formSubmit = async (e) => {
        e.preventDefault()
        console.log(values)
        createUserWithEmailAndPassword(auth, values.email, values.password)
      .then((userCredential) => {
        // Signed in
        console.log("userCredential", userCredential);       
     

     
        // ...
      })
      .catch((error) => {
        console.log("error", error);
        // ..
      });
      }

    return (
        <div>
            <form  onSubmit={formSubmit}>
                <div class="form-group">
                    <label for="exampleInputPassword1">Name</label>
                    <input type="text" class="form-control" id="exampleInputPassword1" name="name" value={values.name}
                        onChange={handleInputChange} />
                </div>
                <div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="email" value={values.email}
                        onChange={handleInputChange} />
                    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" name="password" value={values.password}
                        onChange={handleInputChange} />
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}
