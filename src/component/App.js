import React from "react";
import SearchBar from "./SearchBar";
import techcrunch from "../api/techcrunch";
import ArticleList from "./ArticleList";

const KEY = "4b9158be05bb472aa044853253ddc02f";

class App extends React.Component {
  state = {
    articles: []
  };
  componentDidMount = async () => {
    const response = await techcrunch.get("/everything", {
      params: {
        language: "en",
        domains:
          "techcrunch.com,theverge.com,arstechnica.com,techradar.com,wired.com",
        apiKey: KEY,
        pageSize: 50
      }
    });
    // console.log(response.data.articles);
    this.setState({ articles: response.data.articles });
  };
  onFormSubmit = async term => {
    const response = await techcrunch.get("/everything", {
      params: {
        language: "en",
        domains:
          "techcrunch.com,theverge.com,arstechnica.com,techradar.com,wired.com",
        q: term,
        apiKey: KEY,
        pageSize: 50
      }
    });
    // console.log(response.data.articles);
    this.setState({ articles: response.data.articles });
  };
  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onFormSubmit} />
        <ArticleList articles={this.state.articles} />
      </div>
    );
  }
}

export default App;
