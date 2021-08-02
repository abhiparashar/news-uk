import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Content.css";

const Content = () => {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=us&apiKey=052ed8e1c35d4b92b95e0b7c53fbd30a"
      )
      .then((res) => setArticles(res.data.articles))
      .catch((err) => console.log(err));
  }, []);
  const resultList = articles.map((article) => {
    return (
      <div className="cards">
        <div className="card">
          <img
            src={article.urlToImage}
            alt="../../assets/nbc-social-default.png"
          />
          <div className="published">{article.publishedAt}</div>
          <div className="title">{article.title}</div>
          <div className="description">{article.description}</div>
          <div className="author">{article.author}</div>
          <div className="seemore">{article.url}</div>
        </div>
      </div>
    );
  });
  return <div className="content">{resultList}</div>;
};

export default Content;
