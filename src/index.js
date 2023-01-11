
class Status {
    constructor(value, statusString) {
        this._value = value;

        if (statusString === undefined) {
            statusString = `STATUS ${this.valueOf()}`;
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

export const CONTINUE = new Status(100,"Continue");
export const SWITCHING_PROTOCOLS = new Status(101,"Switching Protocols");
export const PROCESSING = new Status(102,"Processing");
export const EARLY_HINTS = new Status(103,"Early Hints");
export const OK = new Status(200,"OK");
export const CREATED = new Status(201,"Created");
export const NON_AUTHORITATIVE_INFORMATION = new Status(202,"Non-Authoritative Information");
export const NO_CONTENT = new Status(204,"No Content");
export const RESET_CONTENT = new Status(205,"Reset Content");
export const PARTIAL_CONTENT = new Status(206,"Partial Content");
export const MULTI_STATUS = new Status(207,"Multi-Status");
export const ALREADY_REPORTED = new Status(208,"Already Reported");
export const IM_USED = new Status(226,"IM Used");
export const MULTIPLE_CHOICE = new Status(300,"Multiple Choice");
export const MOVED_PERMANENTLY = new Status(301,"Moved Permanently");
export const FOUND = new Status(302,"Found");
export const SEE_OTHER = new Status(303,"See Other");
export const NOT_MODIFIED = new Status(304,"Not Modified");
export const USE_PROXY = new Status(305,"Use Proxy");
export const TEMPORARY_REDIRECT = new Status(307,"Temporary Redirect");
export const PERMANENT_REDIRECT = new Status(308,"Permanent Redirect");
export const BAD_REQUEST = new Status(400,"Bad Request");
export const UNAUTHORIZED = new Status(401,"Unauthorized");
export const PAYMENT_REQUIRED = new Status(402,"Payment Required");
export const FORBIDDEN = new Status(403,"Forbidden");
export const NOT_FOUND = new Status(404,"Not Found");
export const METHOD_NOT_ALLOWED = new Status(405,"Method Not Allowed");
export const NOT_ACCEPTABLE = new Status(406,"Not Acceptable");
export const PROXY_AUTHENTICATION_REQUIRED = new Status(407,"Proxy Authentication Required");
export const REQUEST_TIMEOUT = new Status(408,"Request Timeout");
export const CONFLICT = new Status(409,"Conflict");
export const GONE = new Status(410,"Gone");
export const LENGTH_REQUIRED = new Status(411,"Length Required");
export const PRECONDITION_FAILED = new Status(412,"Precondition Failed");
export const PAYLOAD_TOO_LARGE = new Status(413,"Payload Too Large");
export const URI_TOO_LONG = new Status(414,"URI Too Long");
export const UNSUPPORTED_MEDIA_TYPE = new Status(415,"Unsupported Media Type");
export const RANGE_NOT_SATISFIABLE = new Status(416,"Range Not Satisfiable");
export const EXPECTATION_FAILED = new Status(417,"Expectation Failed");
export const IM_A_TEAPOT = new Status(418,"I'm a teapot");
export const ENHANCE_YOUR_CALM = new Status(420,"Enhance Your Calm");
export const MISDIRECTED_REQUEST = new Status(421,"Misdirected Request");
export const UNPROCESSABLE_ENTITY = new Status(422,"Unprocessable Entity");
export const LOCKED = new Status(423,"Locked");
export const FAILED_DEPENDENCY = new Status(424,"Failed Dependency");
export const TOO_EARLY = new Status(425,"Too Early");
export const UPGRADE_REQUIRED = new Status(426,"Upgrade Required");
export const PRECONDITION_REQUIRED = new Status(428,"Precondition Required");
export const TOO_MANY_REQUESTS = new Status(429,"Too Many Requests");
export const REQUEST_HEADER_FIELDS_TOO_LARGE = new Status(431,"Request Header Fields Too Large");
export const NO_RESPONSE = new Status(444,"No Response");
export const BLOCKED_BY_WINDOWS_PARENTAL_CONTROLS = new Status(450,"Blocked by Windows Parental Controls");
export const UNAVAILABLE_FOR_LEGAL_REASONS = new Status(451,"Unavailable For Legal Reasons");
export const HTTP_REQUEST_SENT_TO_HTTPS_PORT = new Status(497,"HTTP Request Sent to HTTPS Port");
export const TOKEN_EXPIREDINVALID = new Status(498,"Token expired/invalid");
export const CLIENT_CLOSED_REQUEST = new Status(499,"Client Closed Request");
export const INTERNAL_SERVER_ERROR = new Status(500,"Internal Server Error");
export const NOT_IMPLEMENTED = new Status(501,"Not Implemented");
export const BAD_GATEWAY = new Status(502,"Bad Gateway");
export const SERVICE_UNAVAILABLE = new Status(503,"Service Unavailable");
export const GATEWAY_TIMEOUT = new Status(504,"Gateway Timeout");
export const HTTP_VERSION_NOT_SUPPORTED = new Status(505,"HTTP Version Not Supported");
export const VARIANT_ALSO_NEGOTIATES = new Status(506,"Variant Also Negotiates");
export const INSUFFICIENT_STORAGE = new Status(507,"Insufficient Storage");
export const LOOP_DETECTED = new Status(508,"Loop Detected");
export const BANDWIDTH_LIMIT_EXCEEDED = new Status(509,"Bandwidth Limit Exceeded");
export const NOT_EXTENDED = new Status(510,"Not Extended");
export const NETWORK_AUTHENTICATION_REQUIRED = new Status(511,"Network Authentication Required");
export const WEB_SERVER_IS_DOWN = new Status(521,"Web Server Is Down");
export const ORIGIN_IS_UNREACHABLE = new Status(523,"Origin Is Unreachable");
export const SSL_HANDSHAKE_FAILED = new Status(525,"SSL Handshake Failed");
export const NETWORK_CONNECT_TIMEOUT_ERROR = new Status(599,"Network Connect Timeout Error");

const messages = { CONTINUE , SWITCHING_PROTOCOLS , PROCESSING , EARLY_HINTS , OK , CREATED , NON_AUTHORITATIVE_INFORMATION , NO_CONTENT , RESET_CONTENT , PARTIAL_CONTENT , MULTI_STATUS , ALREADY_REPORTED , IM_USED , MULTIPLE_CHOICE , MOVED_PERMANENTLY , FOUND , SEE_OTHER , NOT_MODIFIED , USE_PROXY , TEMPORARY_REDIRECT , PERMANENT_REDIRECT , BAD_REQUEST , UNAUTHORIZED , PAYMENT_REQUIRED , FORBIDDEN , NOT_FOUND , METHOD_NOT_ALLOWED , NOT_ACCEPTABLE , PROXY_AUTHENTICATION_REQUIRED , REQUEST_TIMEOUT , CONFLICT , GONE , LENGTH_REQUIRED , PRECONDITION_FAILED , PAYLOAD_TOO_LARGE , URI_TOO_LONG , UNSUPPORTED_MEDIA_TYPE , RANGE_NOT_SATISFIABLE , EXPECTATION_FAILED , IM_A_TEAPOT , ENHANCE_YOUR_CALM , MISDIRECTED_REQUEST , UNPROCESSABLE_ENTITY , LOCKED , FAILED_DEPENDENCY , TOO_EARLY , UPGRADE_REQUIRED , PRECONDITION_REQUIRED , TOO_MANY_REQUESTS , REQUEST_HEADER_FIELDS_TOO_LARGE , NO_RESPONSE , BLOCKED_BY_WINDOWS_PARENTAL_CONTROLS , UNAVAILABLE_FOR_LEGAL_REASONS , HTTP_REQUEST_SENT_TO_HTTPS_PORT , TOKEN_EXPIREDINVALID , CLIENT_CLOSED_REQUEST , INTERNAL_SERVER_ERROR , NOT_IMPLEMENTED , BAD_GATEWAY , SERVICE_UNAVAILABLE , GATEWAY_TIMEOUT , HTTP_VERSION_NOT_SUPPORTED , VARIANT_ALSO_NEGOTIATES , INSUFFICIENT_STORAGE , LOOP_DETECTED , BANDWIDTH_LIMIT_EXCEEDED , NOT_EXTENDED , NETWORK_AUTHENTICATION_REQUIRED , WEB_SERVER_IS_DOWN , ORIGIN_IS_UNREACHABLE , SSL_HANDSHAKE_FAILED , NETWORK_CONNECT_TIMEOUT_ERROR }

export default messages;
