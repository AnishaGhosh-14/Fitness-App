import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import { User } from './user.entity';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User) private repo: Repository<User>
    ) {}

    create(email: string, name: string, password: string) {
        const user = this.repo.create({ email, name, password });

        return this.repo.save(user);
    }

    async findOne(id: number) {
        if (!id) 
            return null;

        const user = await this.repo.findOneBy({ id });  
        if (!user) 
            throw new NotFoundException('User not found! findone');    
        return user;
    }

    find(email: string) {
        return this.repo.find({ where: { email } }); 
    }

    async update(id: number, attrs: Partial<User>) {
        const user = await this.findOne(id);
        if (!user) 
            throw new NotFoundException('User not found! update');

        Object.assign(user, attrs);

        return this.repo.save(user);

    }

    async remove(id: number) {
        const user = await this.findOne(id);
        if (!user) 
            throw new NotFoundException('User not found! remove');

        return this.repo.remove(user);
    }
}
