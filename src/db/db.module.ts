import { Global, Module } from "@nestjs/common";
import { dbConnection } from "./db.config";

@Global()
@Module({
  providers: [...dbConnection],
  exports: [...dbConnection],
})
export class DbModule {}
