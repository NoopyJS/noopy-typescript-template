import { Request, Response } from 'express';

class ExampleController {
    helloWorld(req:Request, res: Response) {
        res.status(200).send('Hello World');
    }
}

export default new ExampleController();
