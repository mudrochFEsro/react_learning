import React  from 'react';
import useFormState from "./hooks/useFormState";
export default function SimpleFormHook() {
    const[email, updateEmail, resetMail] = useFormState('');
    const[password, updatePassoword, resetPassword] = useFormState('********');
    const resetAll = () =>{
        resetPassword()
        resetMail()
    }
    return(
        <div>
            <h1>The email is: {email}<br/>the password is: {password}</h1>
            <input
                type='text'
                value={email}
                onChange={updateEmail}
            />
            <input
                type='password'
                value={password}
                onChange={updatePassoword}
            />
            <button onClick={resetAll}>Reset</button>
        </div>
    )
}
