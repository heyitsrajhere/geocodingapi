import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, MinLength } from "class-validator";

export class UserDto {
    @ApiProperty({
        description: "this is email",
        example: "email@gmail.com"
    })
    @IsEmail()
    userEmail: string;

    @ApiProperty({
        description: "this is password min length 3",
        example: "password"
    })
    @IsNotEmpty()
    @MinLength(3)
    userPassword: string;
}