import {AppModule} from "./app.module";
import {Noopy} from "noopy-router";

const app = new Noopy(AppModule);
app.init();
app.listen(4000);
