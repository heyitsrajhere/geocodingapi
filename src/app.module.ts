import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { GeocodingModule } from "./geocoding/geocoding.module";
import { DbModule } from './db/db.module';

@Module({
  imports: [GeocodingModule, ConfigModule.forRoot(
    {
      isGlobal: true,
    }
  ), DbModule,],
})
export class AppModule {}
