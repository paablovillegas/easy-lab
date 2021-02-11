const baseUrl = process.env.API;

const fetchSinToken = (endpoint, method = 'GET', data) => {
    const url = `${baseUrl}${endpoint}`;
    if (method === 'GET')
        return fetch(url);
    return fetch(url, {
        method: method,
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(data),
    });
}

const fetchConToken = (endpoint, data, method = 'GET') => {
    const url = `${baseUrl}${endpoint}`;
    const token = localStorage.getItem('token') || '';
    if (method === 'GET')
        return fetch(url);
    return fetch(url, {
        method: method,
        headers: {
            'Content-type': 'application/json',
            'x-token': token,
        },
        body: JSON.stringify(data),
    });
}

export {
    fetchSinToken,
    fetchConToken,
}