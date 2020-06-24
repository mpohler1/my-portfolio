export const CONSTRAINTS = {
    name: {
        length: {
            minimum: 1,
            message: "cannot be empty."
        }
    },
    email: {
        format: {
            // Pattern was found on https://emailregex.com
            // eslint-disable-next-line
            pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            message: "must be a valid email address"
        }
    },
    body: {
        length: {
            minimum: 1,
            message: "cannot be empty."
        }
    }
};
