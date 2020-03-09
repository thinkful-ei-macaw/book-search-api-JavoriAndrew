import React, { Component } from "react";


class Search extends Component {
  

  render() {
    return (
      <form>
        <div>
          <label htmlFor="search">Search: </label>
          <input type="text" name="search" id="search" placeholder="ex., Game of Thrones, Winds of Winter"></input>
          <button className="search-button">Search</button>
        </div>
      </form>
    )
  }

}


export default Search;