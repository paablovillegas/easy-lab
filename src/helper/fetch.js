const baseUrl = process.env.REACT_APP_API;
const token = process.env.REACT_APP_TOKEN;

const headers = ({
    'Content-type': 'application/json',
    //'x-token': localStorage.getItem('token'),
    'x-token': token,
});

const fetchData = (url, data, method = 'GET') =>
    method === 'GET'
        ? fetch(url, { headers: headers })
        : fetch(url, {
            method: method,
            headers: headers,
            body: JSON.stringify(data),
        });

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
        .then(res => {
            if (res.ok) {
                return res.json();
            }
            return Promise.reject(res.json());
        });

export {
    fetchSinToken,
    fetchConToken,
}