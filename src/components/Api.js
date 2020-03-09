const url = 'https://www.googleapis.com/books/v1/volumes?';

const apiKey = 'AIzaSyAUb3XcVJB47unBpnI0sygkiVsnow-IWko';

fetchBooks = () => {
    fetch(url)
        .then(response => response.json())
        .then(books => this.setState({books}))
}