const baseUrl = process.env.REACT_APP_API;

const headers = ({
    'Content-type': 'application/json',
    'x-token': localStorage.getItem('token'),
});

const params = (method, headers, body) => ({ method, headers, body });

const fetchData = (url, data, method = 'GET') =>
    method === 'GET'
        ? fetch(url)
        : fetch(url, params(method, headers, JSON.stringify(data)));

const fetchSinToken = (endpoint, method = 'GET', data) => {
    const url = `${baseUrl}${endpoint}`;
    if (method === 'GET')
        return fetch(url);
    return fetch(url, {
        method: method,
        headers: headers,
        body: JSON.stringify(data),
    });
}

const fetchConToken = (endpoint, data, method = 'GET') =>
    fetchData(`${baseUrl}${endpoint}`, data, method)
        .then(res => res.ok ? res.json() : Promise.reject(res));

export {
    fetchSinToken,
    fetchConToken,
}