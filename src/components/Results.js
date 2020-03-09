import React, { Component } from 'react';

class Results extends Component {
  

  render() {
    return (
        <li>
          <h2>Title: {this.props.title}</h2>
            <p>Author: {this.props.author}</p>
            <img src={this.props.imageUrl} alt="book cover"/>
            <p>Price: {this.props.price}</p>
            <p>Description: {this.props.description}</p>
        </li>
    )
  }
}

export default Results