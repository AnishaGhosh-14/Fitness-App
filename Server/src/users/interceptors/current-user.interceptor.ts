import { NestInterceptor, Injectable, ExecutionContext, CallHandler } from "@nestjs/common";

import { UsersService } from "../users.service";

@Injectable()
export class CurrentUserInterceptor implements NestInterceptor {
    // dependency Injection
    constructor(private userService: UsersService) { }

    async intercept(context: ExecutionContext, next: CallHandler) {
        const request = context.switchToHttp().getRequest();
        const { userId } = request.session || {};

        if (userId) {
            const user = await this.userService.findOne(userId);
            request.currentUser = user;         // check note below
        }

        return next.handle();
        // basically means that let the route handler handle the rest
    }
}

/**
 * The user is retrieved using UserService and passed into the request body
 * The request body can be accessed inside the Decorator
 * This is done, since
 * We can not use Dependency Injection inside Decorators
 */