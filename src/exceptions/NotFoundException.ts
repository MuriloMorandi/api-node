import {IHttpError} from "../interfaces/IHttpError";

export class NotFoundException extends IHttpError {
    constructor(message:string) {
        super(message, 404);
    }
}