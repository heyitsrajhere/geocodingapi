import { ApiProperty } from "@nestjs/swagger";
import { IsAlpha} from "class-validator";

export class GeoCodeRequestDto {
  @ApiProperty({
    description: 'this is your address'
  })
  // @IsString()
  // @IsAlpha()
  address: string;
}
