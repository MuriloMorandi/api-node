import { NextFunction, Request, Response } from "express";


export const validateResource = (schema: any) =>
    async (req: Request, res: Response, next: NextFunction) => {
        const resource = req.body;
        try {
            await schema.validate(resource);
            next();
        } catch (e:any)
        {
            res.status(400).json({ error:e.errors.join(', ')});
        }
    };