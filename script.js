const getData = (url) => {
    return fetch(url)
        .then(response => response.json())
        
}
const sendData = (url, data) => {
    return fetch(url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
}

getData('https://jsonplaceholder.typicode.com/posts')
    .then(data => {
        
        sendData('https://jsonplaceholder.typicode.com/posts', data)
        .then(() => console.log('данные отправлены'))
        .catch(error => console.log('ошибка отправки +' + error));

    })
    .catch(error => console.log('ошибка получения данных +' + error))


