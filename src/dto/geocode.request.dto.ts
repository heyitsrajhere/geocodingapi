import { IsAlpha} from "class-validator";

export class GeoCodeRequestDto {
  // @IsString()
  // @IsAlpha()
  address: string;
}


