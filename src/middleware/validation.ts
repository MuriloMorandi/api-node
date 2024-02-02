import { NextFunction, Request, Response } from "express";

export const validateResource = (schema: any) =>
    async (req: Request, res: Response, next: NextFunction) => {
        const resource = req.body;
        try {
            await schema.validate(resource, {
                abortEarly: false,
            });
            next();
        } catch (e:any)
        {
            const fieldsError = e.inner.map((err: any) => {
                return { name: err.path, message:err.message };
            });
        
            res.status(400).json({fields:fieldsError});
        }
    };