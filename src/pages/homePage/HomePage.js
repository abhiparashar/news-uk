import React from 'react'
import axios from 'axios'
import Footer from '../../components/footer/Footer'
import Navbar from '../../components/navbar/Navbar'
import Content from '../../components/content/Content'
const HomePage = () => {
    const getDta = (term)=>{
        axios
        .get(
          `https://newsapi.org/v2/everything?q=${term}&from=2021-08-02&sortBy=popularity&apiKey=052ed8e1c35d4b92b95e0b7c53fbd30a`
        )
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
    }
    return (
        <div className="homepage">
            <Navbar searchTerm={getDta}/>
            <Content/>
            <Footer/>
        </div>
    )
}
export default HomePage
