const apiURL = "http://localhost:1000";

export function fetchProjects() {
    const endpoint = apiURL + "/projects";
    const headers = {
        'content-type': 'application/json'
    };
    return fetch(endpoint, {
        method: 'GET',
        headers: headers
    }).then(response => Promise.all([
        response,
        response.json()
    ]));
}
