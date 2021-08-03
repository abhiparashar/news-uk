import React,{useState,useEffect} from 'react'
import axios from 'axios'
import Footer from '../../components/footer/Footer'
import Navbar from '../../components/navbar/Navbar'
import Content from '../../components/content/Content'
import {useHistory} from "react-router-dom"

// const isAuth = () =>{
//     console.log(localStorage.getItem('userinfo'));
//     return localStorage.getItem('userinfo') ? true : false
//   }

const HomePage = () => {
    const history  = useHistory()
    const [result, setResult] = useState([])
    const getDta = (term)=>{
        axios
        .get(
          `https://newsapi.org/v2/everything?q=${term}&from=2021-08-02&sortBy=popularity&apiKey=052ed8e1c35d4b92b95e0b7c53fbd30a`
        )
        .then((res) => setResult(res.data.articles))
        .catch((err) => console.log(err));
    }
    // useEffect(() => {
    //    if(!isAuth()){
    //        history.push("/signin")
    //    }
    // }, [])
    return (
        <div className="homepage">
            <Navbar searchTerm={getDta}/>
            <Content resultProp={result}/>
            <Footer/>
        </div>
    )
}
export default HomePage
