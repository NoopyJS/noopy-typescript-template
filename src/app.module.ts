import {Module} from "noopy-router";
import {UsersModule} from "./modules/users.module";

@Module({
    imports: [UsersModule]
})
export class AppModule {}
