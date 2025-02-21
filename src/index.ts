import {AppModule} from "./app.module";
import {Noopy, Response, Request} from "noopy-router";

const app = new Noopy(AppModule);

app.init();



app.listen(4000);
