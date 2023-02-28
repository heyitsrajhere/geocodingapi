import { Controller, Get, Param } from "@nestjs/common";
import { GeoCodeRequestDto } from "src/dto/geocode.request.dto";
import { geocodingService } from "./geocoding.service";

@Controller("geocoding")
export class GeocodingController {
  constructor(private readonly geocodingService: geocodingService) {}
  @Get("/:address")
  async geocode(@Param() geocodedto: GeoCodeRequestDto) {
    // console.log("Address", address);
    // console.log(geocodedto);
    return this.geocodingService.geocode(geocodedto.address);
  }
}
