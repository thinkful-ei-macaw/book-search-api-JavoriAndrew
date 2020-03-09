import React, { Component } from "react";


class Filter extends Component {
  render() {
    return (
      <form>
        <div>
          <label htmlFor="print-type">Print Type: </label>
          <select name="print-type" id="print-type">
            <option value="all">All</option>
            <option value="books">Books</option>
            <option value="magazines">Magazines</option>
          </select>
          <label htmlFor="book-type">Book Type: </label>
          <select name="book-type" id="book-type">
            <option value="partial">partial</option>
            <option value="full">full</option>
            <option value="ebooks">ebooks</option>
            <option value="free-ebooks">free-ebooks</option>
            <option value="paid-ebooks">paid-ebooks</option>
          </select>
        </div>
      </form>

    )
  }
}


export default {
  Filter,
}