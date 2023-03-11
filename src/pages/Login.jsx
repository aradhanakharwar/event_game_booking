import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { reactLocalStorage } from 'reactjs-localstorage';
import { auth } from '../firebase/Firebase';

export default function Login() {
    const initialValues = {
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
        signInWithEmailAndPassword(auth, values.email, values.password)
        .then((userCredential) => {
          // Signed in
          console.log("userCredential", userCredential);
          // const user = userCredential.user;
        //   reactLocalStorage.set("yourInfo", JSON.stringify(userCredential.user));
          reactLocalStorage.set("loginStatus", true);
          console.log(userCredential);
        })
        .catch((error) => {
          console.log("error", error);
        });
      }
    return (
        <div>
            <form onSubmit={formSubmit}>
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
