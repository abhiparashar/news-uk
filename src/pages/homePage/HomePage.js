import React from 'react'
import Footer from '../../components/footer/Footer'
import Navbar from '../../components/navbar/Navbar'
import Content from '../../components/content/Content'
const HomePage = () => {
    return (
        <div className="homepage">
            <Navbar/>
            <Content/>
            <Footer/>
        </div>
    )
}
export default HomePage
