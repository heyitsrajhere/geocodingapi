import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { GeocodingModule } from "./geocoding/geocoding.module";

@Module({
  imports: [GeocodingModule, ConfigModule.forRoot()],
})
export class AppModule {}
