import { Body, Controller, Post } from "@nestjs/common";
import { ApiBadRequestResponse, ApiCreatedResponse, ApiTags } from "@nestjs/swagger";
import { userInfo } from "os";
import { UserDto } from "src/dto/request/user.dto";
import { LoginResponseDto } from "src/dto/response/login.response.dto";
import { RegistrationResponseDto } from "src/dto/response/registration.response.dto";
import { User } from "../entites/user.entity";
// import { UserDto } from "src/dto/user.dto";
import { AuthService } from "./auth.service";

@ApiTags('User')
@Controller("auth")
export class AuthController {
  constructor(private authService: AuthService) {}

  @ApiCreatedResponse({
    description: 'created user object as resonse',
    type: User,
  })
  @ApiBadRequestResponse({
    description: 'user cannot register try again'
  })
  @Post("register")
  async registerUser(@Body() registerUserDto: UserDto): Promise<RegistrationResponseDto> {
    return await this.authService.registerUser(registerUserDto);
  }

  @ApiCreatedResponse({
    description: 'login user object as resonse',
    type: User,
  })
  @ApiBadRequestResponse({
    description: 'user cannot login try again'
  })

  @Post("login")
  async loginUser(@Body() loginUserDto: UserDto): Promise<LoginResponseDto> {
    // console.log(process.env.JWT_SECRET_KEY);
    return await this.authService.loginUser(loginUserDto);
  }
}
