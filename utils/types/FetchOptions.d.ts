type HttpMethod =
  | "GET"
  | "HEAD"
  | "OPTIONS"
  | "PATCH"
  | "POST"
  | "PUT"
  | "DELETE"
  | "CONNECT"
  | "TRACE";

export interface FetchOptions {
  body?: any;
  method: HttpMethod;
  headers?: Record<string, string>;
  requiresAuth?: boolean;
  requiresCaptcha?: boolean;
}
