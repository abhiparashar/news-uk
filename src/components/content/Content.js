import React, { useEffect, useState } from "react";
import axios from "axios";
import image from '../../assets/nbc-social-default.png'
import "./Content.css";

const Content = ({resultProp}) => {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=gb&apiKey=052ed8e1c35d4b92b95e0b7c53fbd30a"
      )
      .then((res) => setArticles(res.data.articles))
      .catch((err) => console.log(err));
  }, []);
  console.log(articles);
  const resultList = articles.map((article) => {
    return (
      <div className="cards">
          <div className="card">
            <img
              src={article.urlToImage===null?image:article.urlToImage}
              alt=""
            />
            <div className="title">{article.title}</div>
            <div className="author">{article.author===null ? 'Anonymous' :article.author}</div>
            <a href={article.url} target="_blank" rel="noreferrer" style={{textDecoration:"none",color:"dark-gray"}}>Read More...</a>
          </div>
      </div>
    );
  });
  return <div className="content">{resultList}</div>;
};

export default Content;
