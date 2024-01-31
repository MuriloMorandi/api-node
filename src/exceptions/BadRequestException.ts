import {IHttpError} from "../interfaces/IHttpError";

export class BadRequestException extends IHttpError{
    constructor(message:string) {
        super(message, 400);
    }
}