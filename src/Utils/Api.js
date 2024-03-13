const url = 'http://www.whateverorigin.org/get?url=' + encodeURIComponent('https://www.swiggy.com/mapi/homepage/getCards?lat=12.961865229894311&lng=77.71057728677988');

fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data); // Now `data` contains the JSON response
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });