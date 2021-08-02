import React from 'react'
import "./Logout.css"
import { useHistory } from 'react-router-dom'

const Logout = () => {
    const history = useHistory()
    const submitHandler = (e) =>{
        e.preventDefault()
        localStorage.removeItem('userinfo')
        history.push('/signin')
    }
    return (
        <div>
            <button onClick={submitHandler}>Logout</button>
        </div>
    )
}

export default Logout