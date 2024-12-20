import { Request, Response } from 'express';
import {Swagger} from "@noopyjs/swagger";

class ExampleController {
    helloWorld(req:Request, res: Response) {
        res.status(200).send('Hello World');
    }
}

export default new ExampleController();
