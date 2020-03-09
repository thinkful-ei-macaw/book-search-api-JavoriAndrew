import React, {Component} from 'react'
import Header from './components/Header'
import Search from './components/Search'
import Filter from './components/Filter'
import Results from './components/Results'

class App extends Component {
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