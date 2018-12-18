import "./ArticleCard.css";
import React from "react";

class ArticleCard extends React.Component {
  render() {
    const { title, author, url, urlToImage, description } = this.props.article;
    return (
      <div className="ui divided items article-card">
        <div className="item">
          <div className="image">
            <img src={urlToImage} alt={title} />
          </div>
          <div className="content">
            <a
              href={url}
              target="_blank"
              className="header"
              rel="noopener noreferrer"
            >
              {title}
            </a>
            <div className="meta">
              <span className="cinema">{author}</span>
            </div>
            <div className="description">
              <p>{description}</p>
            </div>
            <div className="extra">
              <a
                href={url}
                target="_blank"
                className="ui right floated primary button"
                rel="noopener noreferrer"
              >
                Read article
                <i className="right chevron icon" />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ArticleCard;
