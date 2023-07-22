import React, { useState } from 'react';
import { validateForm } from '../Validation/validation.js';
import styles from "./Form.module.css"
import FormPhoto from "../../img/FormPhoto.png"

function Form(props){
    const { login } = props;
    const [ userData, setUserData ] =  useState({
        email : "",
        password : ""
     });

     const [ errors, setErrors ] =  useState({}); 

     const handleChange = (e) => {
        setUserData({
          ...userData,
          [e.target.name]: e.target.value
        });
      };

     const handleSubmit = (e) => {
        e.preventDefault();
        const formErrors = validateForm(userData);
        setErrors(formErrors);
        login(userData);
    };
      
      
    return (
    <div className={styles.container }>
        <img src={FormPhoto} alt="" />
        <form onSubmit={handleSubmit} className={styles.formWrapper}>
            <div className={styles.formContainer}>
                <label className={styles.label}>
                    <h3>Username: </h3>
                    <input className={styles.inputField}
                        type="email"
                        name="email"
                        value={userData.email}
                        onChange={handleChange} 
                    />
                </label>
                {errors.email && <p className={styles.errorMessage}> { errors.email}</p>}
            
                <label className={styles.label}>
                    <h3>Password:</h3>
                    <input className={styles.inputField}
                        type="password"
                        name="password"
                        value={userData.password}
                        onChange={handleChange}
                    />
                </label>
                {errors.password && <p className={styles.errorMessage}>{errors.password}</p>}
                <button className={styles.submitButton} type="submit">Submit</button>
            </div>
        </form>
    </div>)
}

export default Form;