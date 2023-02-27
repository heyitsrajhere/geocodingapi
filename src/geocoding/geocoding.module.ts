import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { GeocodingController } from './geocoding.controller';
import { geocodingService } from './geocoding.service';

@Module({
  providers: [geocodingService, ConfigService],
  controllers: [GeocodingController],
})
export class GeocodingModule {}
