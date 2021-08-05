import React from 'react'
import { toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./Logout.css"
import { useHistory } from 'react-router-dom'

const Logout = () => {
    const history = useHistory()
    const submitHandler = (e) =>{
        e.preventDefault()
        localStorage.removeItem('userinfo')
        toast.success("Logout successful")
        history.push('/signin')
    }
    return (
        <div className="logout">
            <a href="/signin" onClick={submitHandler}>Logout</a>
        </div>
    )
}

export default Logout