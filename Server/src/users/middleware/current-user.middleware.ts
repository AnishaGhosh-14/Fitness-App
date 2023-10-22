import { NestMiddleware, Injectable } from "@nestjs/common";
import { Request, Response, NextFunction } from 'express';

import { UsersService } from "../users.service";
import { User } from "../user.entity";

declare global {
    namespace Express {
        interface Request {
            currentUser?: User;     // notes 
        }
    }
}
/**
 * Explicitly declaring that the Request interface inside Express
 * might have a CurrentUser property;
 */

@Injectable()
export class CurrentUserMiddleware implements NestMiddleware {
    constructor(private usersService: UsersService) {}

    async use(req: Request, res: Response, next: NextFunction) {
        const {userId} = req.session || {};

        if (userId) {
            console.log("--------Mid userId =", userId);
            const user = await this.usersService.findOne(userId);
            req.currentUser = user;
        }
        
        next();
    }
}