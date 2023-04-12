import React from 'react'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
    const [dataForm, setDataForm] = useState({
        email: "",
        password: "",
        confirmPassword: "",
        joinNewsLetter: true
    })

    function handleChange(event) {
        const {name, value, type, checked} = event.target
        setDataForm(prevState => {
            return {
                ...prevState,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }
    
  function handleSubmit(event) {
    event.preventDefault()
    if(dataForm.password === dataForm.confirmPassword){
        console.log("Successfully signed up")
    }
    else{
        console.log("passwords to not match")
        return
    }
    if(dataForm.joinNewsLetter){
        console.log("Thanks for signing up for our newsletter!")
    }
}

return (
    <div className="form-container">
        <form className="form" onSubmit={handleSubmit}>
            <input 
                type="email" 
                placeholder="Email address"
                className="form--input"
                name="email"
                value={dataForm.email}
                onChange={handleChange}
            />
            <input 
                type="password" 
                placeholder="Password"
                className="form--input"
                name="password"
                value={dataForm.password}
                onChange={handleChange}
            />
            <input 
                type="password" 
                placeholder="Confirm password"
                className="form--input"
                name="confirmPassword"
                value={dataForm.confirmPassword}
                onChange={handleChange}
            />
            
            <div className="form--marketing">
                <input
                    id="okayToEmail"
                    type="checkbox"
                    name="joinNewsLetter"
                    checked={dataForm.joinNewsLetter}
                    onChange={handleChange}
                    
                />
                <label htmlFor="okayToEmail">I want to join the newsletter</label>
            </div>
            <button 
                className="form--submit"
            >
                Sign up
            </button>
        </form>
    </div>
) 
}

export default App
