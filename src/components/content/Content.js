import React, { useEffect, useState } from "react";
import axios from "axios";
import Loader from 'react-loader-spinner';
import image from "../../assets/nbc-social-default.png";
import "./Content.css";

const Content = ({ resultProp }) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if(loading){
      <Loader type="Circles" color="#00BFFF" height={80} width={80}/>
    }
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=gb&apiKey=052ed8e1c35d4b92b95e0b7c53fbd30a"
      )
      .then((res) => setArticles(res.data.articles))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    <Loader type="Circles" color="#00BFFF" height={80} width={80}/>
    setArticles(resultProp);
  }, [resultProp]);

  const resultList = articles.map((article) => {
    return (
      <div className="cards">
        <div className="card">
          <img
            src={article.urlToImage === null ? image : article.urlToImage}
            alt=""
          />
          <div className="title">{article.title}</div>
          <div className="author">
            {article.author === null ? "Anonymous" : article.author}
          </div>
          <a
            href={article.url}
            target="_blank"
            rel="noreferrer"
            style={{ textDecoration: "none", color: "dark-gray",padding:"0px 0px 15px 15px" }}
          >
            Read More...
          </a>
        </div>
      </div>
    );
  });
  return <div className="content">{resultList}</div>;
};

export default Content;
