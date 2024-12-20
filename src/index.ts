import express from 'express';
import ExampleController from "./controllers/example.controller.js";

const app = express();

app.get('/', ExampleController.helloWorld);

app.listen(4000, () => {
    console.log('Server is running on port 4000');
});
