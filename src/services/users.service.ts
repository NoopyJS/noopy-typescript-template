import {UsersModel} from "../models/users.model";

export class UsersService {
    users: UsersModel[] = [];
    nextId = 1;

    constructor() {}

    getAllUsers() {
        return this.users;
    }

    getUser(id: number) {
        return this.users.find(u => u.id === id);
    }

    createUser(user: UsersModel) {
        user.id = this.nextId++;
        this.users.push(user);
        return user;
    }

    updateUser(id: number, user: UsersModel) {
        const index = this.users.findIndex(u => u.id === id);
        if(index === -1) {
            return null;
        }
        this.users[index] = user;
        return user;
    }

    deleteUser(id: number) {
        const index = this.users.findIndex(u => u.id === id);
        if(index !== -1) {
            this.users.splice(index, 1);
            return true;
        }
        return false;
    }
}
