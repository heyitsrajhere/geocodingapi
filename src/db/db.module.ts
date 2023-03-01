import { Global, Module } from "@nestjs/common";
import { AuthModule } from "./auth/auth.module";
import { dbConnection } from "./db.config";

@Global()
@Module({
  imports: [AuthModule],
  providers: [...dbConnection],
  exports: [...dbConnection],
})
export class DbModule {}
