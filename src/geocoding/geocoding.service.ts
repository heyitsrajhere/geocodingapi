import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import axios from 'axios';
@Injectable()
export class geocodingService {
  constructor(private configService: ConfigService) {}
  async geocode(address: string) {
    const apiKey = this.configService.get<string>('BING_MAPS_API_KEY');
    const url = `http://dev.virtualearth.net/REST/v1/Locations?query=${encodeURI(
      address,
    )}&key=AuE8zDkqUuqja48k9HnCut51UDfic6Ms3uevRCQnrGKgIPB7qnnKw-ptwVD_vTec`;
    const response = await axios.get(url);
    const result = response.data.resourceSets[0].resources[0];

    return {
      latitude: result.geocodePoints[0].coordinates[0],
      longtitude: result.geocodePoints[0].coordinates[1],
    };
  }
}
