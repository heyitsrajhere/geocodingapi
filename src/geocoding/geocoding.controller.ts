import { Controller, Get, Param, UseGuards } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { ApiBadRequestResponse, ApiCreatedResponse, ApiTags } from "@nestjs/swagger";
import { GeoCodeRequestDto } from "src/dto/request/geocode.request.dto";
// import { GeoCodeRequestDto } from "src/dto/geocode.request.dto";
import { geocodingService } from "./geocoding.service";

@UseGuards(AuthGuard('jwt'))
@ApiTags('Geocode')
@Controller("geocoding")
export class GeocodingController {
  constructor(private readonly geocodingService: geocodingService) {}
  @ApiCreatedResponse({
    description: 'created geocode api as address',
  })
  @ApiBadRequestResponse({
    description: 'user cannot get geocode of address'
  })
  @Get("/:address")
  async geocode(@Param() geocodedto: GeoCodeRequestDto) {
    // console.log("Address", address);
    // console.log(geocodedto);
    return this.geocodingService.geocode(geocodedto.address);
  }
}

