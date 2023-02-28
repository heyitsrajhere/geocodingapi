import { Controller, Get, Param } from "@nestjs/common";
import { geocodingService } from "./geocoding.service";

@Controller("geocoding")
export class GeocodingController {
  constructor(private readonly geocodingService: geocodingService) {}
  @Get("/:address")
  async geocode(@Param("address") address: string) {
    // console.log("Address", address);
    return this.geocodingService.geocode(address);
  }
}
