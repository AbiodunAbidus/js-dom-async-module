
// Callback-based function to fetch data from a URL
function fetchData(url, callback) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.onload = function() {
        setTimeout(() => {
            if (xhr.status === 200) {
                callback(new Promise((resolve, reject) => {
                    resolve(xhr.responseText);
                }), xhr.responseText, "Data fetched");
            } else {
                callback(new Error('Request failed with status ' + xhr.status));
            }
        }, 2000); // 2 seconds delay
    };
    xhr.onerror = function() {
        setTimeout(() => {
            callback(new Error('Network error'));
        }, 2000); // 2 seconds delay
    };
    xhr.send();
    }

    // Example usage:
    fetchData('https://jsonplaceholder.typicode.com/todos/1', function(err, data, message) {
        if (err) {
            console.error('Error:', err);
        } else {
            console.log('Data:', data);
            console.log('Message:', message);
        }
    });