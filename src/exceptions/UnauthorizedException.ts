import {IHttpError} from "../interfaces/IHttpError";

export class UnauthorizedException extends IHttpError {
  constructor(message :string) {
    super(message, 401);
  }
}