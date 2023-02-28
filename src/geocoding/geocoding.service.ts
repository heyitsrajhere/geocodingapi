import { Injectable, NotFoundException } from "@nestjs/common";
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
    // const url = 
    // `http://dev.virtualearth.net/REST/v1/Routes?wayPoint.1=${start}&Waypoint.2=${end}&distanceUnit={mi}&key=${'GEOCODE_API_TOKEN'}`

    // console.log(url);
    const response = await axios.get(url);
    // console.log(response);
    const result = response.data.resourceSets[0].resources[0];
    if (response.data.resourceSets[0].estimatedTotal == 0){
      throw new NotFoundException('enter valid address');
    }
    return {
      latitude: result.geocodePoints[0].coordinates[0],
      longtitude: result.geocodePoints[0].coordinates[1],
      Locality: result.address['formattedAddress'],
    };
  }
}


// http://dev.virtualearth.net/REST/v1/Routes?wayPoint.1={wayPoint1}&Waypoint.2={Waypoint2}&maxSolutions={maxSolutions}&distanceUnit={mi}&key={'GEOCODE_API_TOKEN'}
