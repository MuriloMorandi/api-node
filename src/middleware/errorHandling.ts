import { NextFunction, Request, Response } from "express";
import { IHttpError } from "../interfaces/IHttpError";


export const ErrorHandling = (
    error: IHttpError,
    req: Request,
    resp: Response,
    _next: NextFunction
) => {
    if(!error.status) {
        return resp.status(500).json({error: 'Internal Server Error'})
    }

    return resp.status(error.status).json({error: error.message})
}