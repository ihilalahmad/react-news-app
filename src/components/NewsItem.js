import React, { Component } from "react";

const NewsItem = (props) => {
  let { title, description, imageUrl, newsUrl, publishedAt, source } = props;
  return (
    <div className="mt-2">
      <div className="card">
        <img
          src={
            imageUrl
              ? imageUrl
              : "https://fosterlawfirmatlanta.com/wp-content/uploads/2020/09/Marketplace-Lending-News-1464x732.jpg"
          }
          className="card-img-top"
          alt="..."
        />

        <div className="card-body">
          <h6>
            Source:{" "}
            <span className="badge rounded-pill bg-danger">{source}</span>
          </h6>
          <h5 className="card-title">{title}...</h5>
          <p className="card-text">{description}...</p>
          <a href={newsUrl} target="_blank" className="btn btn-sm btn-dark">
            Read more
          </a>
        </div>
        <div className="card-footer">
          <small className="text-muted">
            {new Date(publishedAt).toUTCString()}
          </small>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
