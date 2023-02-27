import { Controller, Get, Query } from '@nestjs/common';
import { geocodingService } from './geocoding.service';

@Controller('geocoding')
export class GeocodingController {
  constructor(private readonly geocodingService: geocodingService) {}
  @Get()
  async geocode(@Query('address') address: string) {
    return this.geocodingService.geocode(address);
  }
}
