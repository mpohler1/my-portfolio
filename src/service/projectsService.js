const API_URL = "https://api.masonpohler.com:1000";
const TIME_OUT_TIME = 3000;

export function getProjects() {
    return Promise.race([
        fetchProjects(),
        timeOut(TIME_OUT_TIME)
    ])
}

function timeOut(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
        .then(() => Promise.all([
        {status: 408},
        "time out"
    ]));
}

function fetchProjects() {
    const endpoint = API_URL + "/projects";
    const headers = {
        'content-type': 'application/json'
    };
    return fetch(endpoint, {
        method: 'GET',
        headers: headers
    }).then(response => Promise.all([
        response,
        response.json()
    ])).catch((error) => Promise.all([
        {status: 503},
        "server is not available"
    ]));
}
