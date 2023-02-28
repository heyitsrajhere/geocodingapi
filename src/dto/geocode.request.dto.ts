import { IsString } from "class-validator";

export class GeoCodeRequestDto {
  @IsString()
  "address": "string";
}
