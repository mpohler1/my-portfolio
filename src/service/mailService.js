const apiURL = "http://localhost:9000";

export function sendMail(from, subject, body) {
    const endpoint = apiURL + "/mail/send";
    const headers = {
        'content-type': 'application/json'
    };
    const mailModel = {
        from: from,
        subject: subject,
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
