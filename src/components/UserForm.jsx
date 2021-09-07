import React, { useState } from 'react';
import styles from './styles.module.css'


const UserForm = props => {

    const { state, setState } = props

    const displayChange = e => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }


    // const [firstName, setFirstName] = useState("");
    // const [lastName, setLastName] = useState("");
    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");
    // const [confirmPassword, setConfirmPassword] = useState("");

    // const createUser = (e) => {
    //     e. preventDefault();
    //     const newUser = { firstName, lastName, email, password };
    //     console.log("Welcome", newUser);
    //     setFirstName("")
    //     setLastName("")
    //     setEmail("")
    //     setPassword("")
    //     setConfirmPassword("")
    // };

    return(
        <div className={styles.formContainer} >
            <form >
                <div className={styles.formComponent}>
                    <label htmlFor="firstName">First Name: </label> 
                    <input className={styles.formInput} name="firstName" type="text" onChange={ displayChange } />
                </div>
                <div className={styles.formComponent}>
                    <label htmlFor="lastName">Last Name: </label> 
                    <input className={styles.formInput} name="lastName" type="text" onChange={ displayChange } />
                </div>
                <div className={styles.formComponent}>
                    <label htmlFor="email">Email: </label> 
                    <input className={styles.formInput} name="email" type="text" onChange={ displayChange } />
                </div>
                <div className={styles.formComponent}>
                    <label htmlFor="password">Password: </label>
                    <input className={styles.formInput} name="password" type="text" onChange={ displayChange } />
                </div>
                <div className={styles.formComponent}>
                    <label htmlFor="confirmPassword">Confirm Password: </label>
                    <input className={styles.formInput} name="confirmPassword" type="text" onChange={ displayChange } />
                </div>
                <button className={styles.formButton} action="submit">Create</button>
            </form>
        </div>
    )
}

export default UserForm;