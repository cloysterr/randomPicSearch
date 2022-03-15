import React from "react";

class Searchbar extends React.Component {
  state = {
    inputVal: " ",
  };
  onInputChangeHandler(e) {
    console.log(e.target.value);
  }
  handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.inputVal);
    this.props.useSearchInput(this.state.inputVal);
  };
  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.handleFormSubmit} className="ui form">
          <div className="field">
            <label>Image Search </label>
            <input
              value={this.state.inputVal}
              onChange={(e) => this.setState({ inputVal: e.target.value })}
              type="text"
            />
          </div>
        </form>
      </div>
    );
  }
}
export default Searchbar;
