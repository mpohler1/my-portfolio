export const CONSTRAINTS = {
    from: {
        format: {
            // Pattern was found on https://emailregex.com
            // eslint-disable-next-line
            pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            message: "must be a valid email address"
        }
    },
    subject: {
        format: {
            pattern: /^[\w .]+$/,
            message: "must contain at least 1 alphanumeric character"
        }
    },
    body: {
        format: {
            pattern: /^[\w .]+$/,
            message: "must contain at least 1 alphanumeric character"
        }
    }
};
