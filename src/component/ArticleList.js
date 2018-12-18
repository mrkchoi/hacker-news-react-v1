import React from "react";
import ArticleCard from "./ArticleCard";

const ArticleList = ({ articles }) => {
  const renderedArticles = articles.map(article => {
    return <ArticleCard article={article} key={article.publishedAt} />;
  });
  return <div>{renderedArticles}</div>;
};

export default ArticleList;
