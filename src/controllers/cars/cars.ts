import { Response, Request } from "express";
export const root = (req: Request, res: Response) => {
    res.send(JSON.stringify({hello: "world" }));
};
