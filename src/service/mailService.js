const API_URL = "https://api.masonpohler.com:9000";
const TIME_OUT_TIME = 3000;

export function sendMail(name, email, body) {
    return Promise.race([
        postMail(name, email, body),
        timeOut(TIME_OUT_TIME)
    ])
}

function timeOut(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
        .then(() => Promise.all([
            {status: 408}
        ]));
}

function postMail(name, email, body) {
    const endpoint = API_URL + "/mail/send";
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
        response
    ])).catch((error) => Promise.all([
        {status: 503}
    ]));
}
