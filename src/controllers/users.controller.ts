import {Controller, Delete, Get, Post, Put, Request, Response} from "noopy-router";
import {UsersService} from "../services/users.service";

@Controller('users')
export class UsersController {

    static dependencies = [UsersService];

    constructor(private usersService: UsersService) {}

    @Get('')
    getAllUsers(req: Request, res: Response) {
        res.json(this.usersService.getAllUsers());
    }

    @Get('/:id')
    getUser(req: Request, res: Response) {
        const user = this.usersService.getUser(Number(req.params.id));
        if(user) {
            res.json(user);
        } else {
            res.statusCode = 404;
            res.json({error: 'User not found'});
        }
    }

    @Post('')
    async createUser(req: Request, res: Response) {
        const {name, email } = await req.body();
        const user = this.usersService.createUser({name, email});
        res.statusCode = 201;
        res.json(user);


    }

    @Put('/:id')
    async updateUser(req: Request, res: Response) {
        const userId = Number(req.params.id);
        const {name, email} = await req.body();
        const user = this.usersService.updateUser(userId, {name, email, id: userId});
        if(user) {
            res.json(user);
        } else {
            res.statusCode = 404;
            res.json({error: 'User not found'});
        }
    }

    @Delete('/:id')
    deleteUser(req: Request, res: Response) {
        const success = this.usersService.deleteUser(Number(req.params.id));
        if(success) {
            res.statusCode = 204;
            res.json({message: 'User deleted successfully'});
        } else {
            res.statusCode = 404;
            res.json({error: 'User not found'});
        }
    }

}
