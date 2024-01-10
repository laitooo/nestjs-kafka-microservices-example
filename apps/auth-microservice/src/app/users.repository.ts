import { Injectable } from "@nestjs/common";
import { User } from "@nestjs-microservices/shared/entities"

@Injectable()
export class UsersRepository {
    private readonly users: User[] = [];

    save(user: User) {
        this.users.push({...user, id: this.users.length + 1 });
        console.log('added new user', this.users);
    }

    findOne(id: number) {
        console.log('find user with id', id, 'current list', this.users);
        return this.users.find((u) => u.id === id) || null;
    }

}