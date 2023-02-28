import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GeocodingController } from './geocoding.controller';
import { geocodingService } from './geocoding.service';

@Module({
  imports: [ConfigModule],
  providers: [geocodingService],
  controllers: [GeocodingController],
})
export class GeocodingModule {}
