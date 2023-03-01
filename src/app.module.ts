import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { GeocodingModule } from "./geocoding/geocoding.module";
import { DbModule } from './db/db.module';
import { loggerMiddlewear } from "./middlewear/logger.middlewear";
import { GeocodingController } from "./geocoding/geocoding.controller";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
  imports: [GeocodingModule,  ConfigModule.forRoot(
    {
      isGlobal: true,
    }
  ), DbModule,],
  
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
    .apply(loggerMiddlewear)
    .forRoutes(GeocodingController)
  }
}


