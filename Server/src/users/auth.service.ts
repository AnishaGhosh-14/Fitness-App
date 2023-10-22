import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";
import { UsersService } from "./users.service";
import { scrypt as _scrypt, randomBytes } from "crypto";
import { promisify } from "util";


const scrypt = promisify(_scrypt);

@Injectable()
export class AuthService {
    constructor(private usersService: UsersService) { }

    async signup(email: string, name: string, password: string) {
        // see if email is in use
        console.log("------Sign Up")
        const users = await this.usersService.find(email)
        if (users.length) {
            throw new BadRequestException("Email already in use");
        }

        if (!users.length) {
            // hash and salt the users password
            // 1. generate a salt
            const salt = randomBytes(8).toString('hex');

            // 2. hash the salt and password together
            const hash = (await scrypt(password, salt, 32)) as Buffer; // 32 is length of the hash

            // 3. join the hashed result and the salt
            const result = salt + '.' + hash.toString('hex');


            // create a new user and save it
            const user = await this.usersService.create(email, name, result);

            return user;
        }
    }


    async signin(email: string, password: string) {
        console.log("------Sign In")
        const [user] = await this.usersService.find(email);

        if (!user) {
            throw new NotFoundException('User Not Found! authService/signin');
        }

        const [salt, storedHash] = user.password.split('.');

        const hash = (await scrypt(password, salt, 32)) as Buffer;
        if (hash.toString('hex') !== storedHash) {
            throw new BadRequestException("Wrong Password or Email")
        }

        return user;
    }
}