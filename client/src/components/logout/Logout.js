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
        <div className="logout">
            <a href="/signin" onClick={submitHandler}>Logout</a>
        </div>
    )
}

export default Logout