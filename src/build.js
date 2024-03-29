const fs = require('fs');

const map = {
    100: "Continue",
    101: "Switching Protocols",
    102: "Processing",
    103: "Early Hints",
    200: "OK",
    201: "Created",
    202: "Non-Authoritative Information",
    204: "No Content",
    205: "Reset Content",
    206: "Partial Content",
    207: "Multi-Status",
    208: "Already Reported",
    226: "IM Used",
    300: "Multiple Choice",
    301: "Moved Permanently",
    302: "Found",
    303: "See Other",
    304: "Not Modified",
    305: "Use Proxy",
    307: "Temporary Redirect",
    308: "Permanent Redirect",
    400: "Bad Request",
    401: "Unauthorized",
    402: "Payment Required",
    403: "Forbidden",
    404: "Not Found",
    405: "Method Not Allowed",
    406: "Not Acceptable",
    407: "Proxy Authentication Required",
    408: "Request Timeout",
    409: "Conflict",
    410: "Gone",
    411: "Length Required",
    412: "Precondition Failed",
    413: "Payload Too Large",
    414: "URI Too Long",
    415: "Unsupported Media Type",
    416: "Range Not Satisfiable",
    417: "Expectation Failed",
    418: "I'm a teapot",
    420: "Enhance Your Calm", // http.cat
    421: "Misdirected Request",
    422: "Unprocessable Entity",
    423: "Locked",
    424: "Failed Dependency",
    425: "Too Early",
    426: "Upgrade Required",
    428: "Precondition Required",
    429: "Too Many Requests",
    431: "Request Header Fields Too Large",
    444: "No Response",
    450: "Blocked by Windows Parental Controls", // http.cat
    451: "Unavailable For Legal Reasons",
    497: "HTTP Request Sent to HTTPS Port", // http.cat
    498: "Token expired/invalid", // http.cat
    499: "Client Closed Request", // http.cat
    500: "Internal Server Error",
    501: "Not Implemented",
    502: "Bad Gateway",
    503: "Service Unavailable",
    504: "Gateway Timeout",
    505: "HTTP Version Not Supported",
    506: "Variant Also Negotiates",
    507: "Insufficient Storage",
    508: "Loop Detected",
    509: "Bandwidth Limit Exceeded", // http.cat
    510: "Not Extended",
    511: "Network Authentication Required",
    521: "Web Server Is Down", // http.cat
    523: "Origin Is Unreachable", // http.cat
    525: "SSL Handshake Failed", // http.cat
    599: "Network Connect Timeout Error" // http.cat
};

const statuses = {};

var outp = `
class Status {
    constructor(value, statusString) {
        this._value = value;

        if (statusString === undefined) {
            statusString = \`STATUS \${this.valueOf()}\`;
        }
    
        this._string = statusString; 
    }

    valueOf() {
        return this._value;
    }

    toString() {
        return this._string;
    }
}

`;

const messages = [];

for (const status in map) {
    // replace all groupings of "-","_" or whitespace with a single "_"
    let message = map[status].replace(/[-\s_]+/g,"_");
    // remove all non-alphanumeric characters
    message = message.replace(/[^\w]/g,"");
    // make message uppercase
    message = message.toUpperCase();

    outp += `export const ${message} = new Status(${parseInt(status)},\"${map[status]}\");\n`;
    messages.push(message);
}

outp += '\n';

outp += `const messages = { ${ messages.join(" , ")} }\n\n`;

outp += `export default messages;`;

console.log(outp);
//export default statuses;
