import { NextFunction, Request, Response } from "express";

export const logResponseTime = (req: Request,
    res: Response,
    _next: NextFunction) => {
    
    const startHrTime = process.hrtime.bigint();
    
    res.on("finish", () => {
        
        const endHrTime = process.hrtime.bigint();
        const elapsedTimeInMs = Number(endHrTime - startHrTime) / 1000000.0;
        
        console.info(req.method + " " + req.originalUrl + " " + elapsedTimeInMs);
    });

    _next();
}