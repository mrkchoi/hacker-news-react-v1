import React from "react";

class SearchBar extends React.Component {
  state = {
    term: ""
  };

  onInputChange = e => {
    this.setState({ term: e.target.value });
  };
  onFormSubmit = e => {
    e.preventDefault();
    this.props.onFormSubmit(this.state.term);
  };

  render() {
    return (
      <div className="ui divided segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label>Tech News</label>
            <div className="ui icon input">
              <input
                type="text"
                value={this.state.term}
                onChange={this.onInputChange}
              />
              <i className="search icon" />
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
