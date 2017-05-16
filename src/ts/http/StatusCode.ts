export default class StatusCode {
  public static get ACCEPTED(): number {
    return 202
  };

  public static get BAD_GATEWAY(): number {
    return 502
  };

  public static get BAD_REQUEST(): number {
    return 400
  };

  public static get CONFLICT(): number {
    return 409
  };

  public static get CONNECTIVITY_PROBLEM(): number {
    return 0
  };

  public static get CREATED(): number {
    return 201
  };

  public static get FORBIDDEN(): number {
    return 403
  };

  public static get INTERNAL_SERVER_ERROR(): number {
    return 500
  };

  public static get NO_CONTENT(): number {
    return 204
  };

  public static get NOT_FOUND(): number {
    return 404
  };

  public static get OK(): number {
    return 200
  };

  public static get PRECONDITION_FAILED(): number {
    return 412
  };

  public static get REQUEST_TIMEOUT(): number {
    return 408
  };

  public static get REQUEST_TOO_LARGE(): number {
    return 413
  };

  public static get TOO_MANY_REQUESTS(): number {
    return 429
  };

  public static get UNAUTHORIZED(): number {
    return 401
  };

}
