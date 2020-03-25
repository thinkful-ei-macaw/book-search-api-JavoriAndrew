import React, { Component } from 'react';

class Results extends Component {
  

  render() {
    return (
      <ul>
      {this.props.books.map(book => (
        <li>
          <h2>Title: {book.volumeInfo.title}</h2>
            <p>Author: {book.volumeInfo.authors.join(',')}</p>
            <img src={book.volumeInfo.imageLinks.thumbnail} alt="book cover"/>
            <p>Price: {book.saleInfo.saleability}</p>
            <p>Description: {book.volumeInfo.description}</p>
        </li>
      ))}
      </ul>
        
    )
  }
}

export default Results