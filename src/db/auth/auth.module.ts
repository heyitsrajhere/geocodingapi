import { Module } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { JwtModule } from "@nestjs/jwt";
import { PassportModule } from "@nestjs/passport";
import { dbConnection } from "../db.config";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { JwtStrategy } from "./jwt.strategy";
@Module({
    imports: [PassportModule,
        JwtModule.registerAsync({
            useFactory: async (configService: ConfigService) => ({
              secret: configService.get<string>('JWT_SECRET_KEY'),
              signOptions: { expiresIn: '2h' },
            }),
            inject: [ConfigService],
          }),
    ],
    controllers: [AuthController],
    exports: [AuthService],
    providers: [...dbConnection ,AuthService, JwtStrategy],
})
export class AuthModule {}