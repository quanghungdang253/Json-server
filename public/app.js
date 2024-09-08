document.getElementById('fetch-data').addEventListener('click', () => {
    fetch('/api/hello')
        .then(response => response.json())
        .then(data => {
            document.getElementById('response').textContent = JSON.stringify(data, null, 2);
        })
        .catch(error => console.error('Error fetching data:', error));
});
