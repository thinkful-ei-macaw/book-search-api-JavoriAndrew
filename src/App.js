import React, {Component} from 'react'
import Header from './components/Header'
import Search from './components/Search'
import Results from './components/Results'
import Api from './components/Api'

class App extends Component {

    state = {
      booksArray: []
    }

    handleSearch = e => {
      e.preventDefault();
      const search = e.target.search.value;
      const bookType = e.target['book-type'].value;
      const printType = e.target['print-type'].value;
      Api.bookFinder(search, bookType, printType)
        .then(data => this.setState({
          booksArray: data
        }))
    }

    render() {
      return (
        <div>
        <Header />
          <div>
            <Search handleSearch={this.handleSearch}/>
            <Results books={this.state.booksArray}/>
          </div>
        </div>
      )
}
}

export default App;