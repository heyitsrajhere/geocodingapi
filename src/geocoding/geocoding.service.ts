import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
// import { GeoCodeRequestDto } from 'src/dto/geocode.request.dto';
import axios from "axios";
@Injectable()
export class geocodingService {
  constructor(private configService: ConfigService) {}
  async geocode(address: string) {
    // console.log(this.configService.get<string>("GEOCODE_API_TOKEN"));
    const url = `http://dev.virtualearth.net/REST/v1/Locations?query=${encodeURI(
      address
    )}&key=${this.configService.get<string>("GEOCODE_API_TOKEN")}`;
    // console.log(url);
    const response = await axios.get(url);
    // console.log(response);
    const result = response.data.resourceSets[0].resources[0];

    return {
      latitude: result.geocodePoints[0].coordinates[0],
      longtitude: result.geocodePoints[0].coordinates[1],
    };
  }
}
