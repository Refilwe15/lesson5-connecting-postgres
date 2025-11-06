import { Request, Response,NextFunction } from "express";
import jwt from "jsonwebtoken"
import { findUserByEmail } from "../service/userService";
import { User } from "../types/user.types"
import { log } from "node:console";

interface JwtPayload {
    userId: number,
    email: string

}

export const protect = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    let token;
    if(
        req.headers.authorization && 
        req.headers.authorization.startsWith("Bearer"))
        {
        try{
            console.log(req.headers, 'request headers');
            console.log(req.headers.authorization , "token");
            
            token = req.headers.authorization.split(" ")[1]
            const decoded = jwt.verify(token, process.env.JWT_SECRET!) as JwtPayload
            console.log(decoded, 'decoded token');

            const user : User | null = await findUserByEmail(decoded.email)
            
            req.user = user || undefined
        }catch(error){
       
            
        }
    }
}