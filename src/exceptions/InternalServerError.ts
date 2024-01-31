import {IHttpError} from "../interfaces/IHttpError";

export class InternalServerError extends IHttpError{
    constructor(message = '') {
        super(message, 500);
    }
}