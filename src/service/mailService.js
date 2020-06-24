const apiURL = "http://192.168.1.69:9000";

export function sendMail(name, email, body) {
    const endpoint = apiURL + "/mail/send";
    const headers = {
        'content-type': 'application/json'
    };
    const mailModel = {
        name: name,
        email: email,
        body: body
    };
    return fetch(endpoint, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(mailModel)
    }).then(response => Promise.all([
        response,
        response.json()
    ]));
}
