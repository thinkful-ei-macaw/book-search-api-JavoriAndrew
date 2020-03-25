const url = 'https://www.googleapis.com/books/v1/volumes?key=AIzaSyAUb3XcVJB47unBpnI0sygkiVsnow-IWko';

// const apiKey = 'AIzaSyAUb3XcVJB47unBpnI0sygkiVsnow-IWko';

function bookFinder(search, bookType, printType) {
    let query = ""
    if(search) {
        query += "&q=" + search 
    }
    if(bookType) {
        query += "&filter=" + bookType 
    }
    if(printType) {
        query += "&printType=" + printType 
    }
    return fetch(url + query)
        .then(response => response.json())
        .then(data => {
            return data.items;
        })
        .catch(err => {
            console.log(`Error: ${err}`);
        })
}

export default {bookFinder};