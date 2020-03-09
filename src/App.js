import React, {Component} from 'react'
import Header from './components/Header'
import Search from './components/Search'
import Filter from './components/Filter'
import Results from './components/Results'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      books: [],
      printType: 'All',
      bookType: 'No filter'
    }
  
  }

  const url = 'https://www.googleapis.com/books/v1/volumes?';

  let apiKey = 'AIzaSyAUb3XcVJB47unBpnI0sygkiVsnow-IWko';

  fetchBooks = () => {
      fetch(url)
          .then(response => response.json())
          .then(books => this.setState({books}))
  }


    render() {
      return (
        <div>
        <Header />
          <div>
            <Search />
            <Filter />
            <Results />
          </div>
        </div>
      )
}
}

export default App;