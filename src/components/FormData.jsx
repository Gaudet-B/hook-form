import React, { useState } from 'react';
import styles from './styles.module.css'


const FormData = props => {
    const { firstName, lastName, email, password, confirmPassword } = props.data
    return (
        <div className={styles.formData}>
            <p>Your Form Data</p>
            <br></br>
            <p>First Name: {firstName} </p>
            <p>Last Name: {lastName}</p>
            <p>Email: {email}</p>
            <p>Password: {password}</p>
            <p>Confirm Password: {confirmPassword}</p>
        </div>
    )
}

export default FormData
