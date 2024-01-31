import { NextFunction, Response } from "express";
import { IHttpResponse } from "../interfaces/IHttp";
import { IController } from "../interfaces/IController";


export const adaptRoute = (controller: IController) => {
    return async (req: any, res: Response, next:NextFunction) => {
        const httpRequest = {
            body: req.body,
            params: req.params,
            query: req.query,
        }
        
        try
        {
            const httpResponse: IHttpResponse = await controller.handle(httpRequest);
            res.status(httpResponse.statusCode).json(httpResponse.data);
        }
        catch (error)
        {
            next(error)
        }
    }
}
