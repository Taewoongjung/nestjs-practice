import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserRepository } from "./user.repository";
import { JwtModule } from "@nestjs/jwt";
import { PassportModule } from "@nestjs/passport";
import { JwtStrategy } from "./jwt.strategy";

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secret: 'Secret123777',
      signOptions: {
        expiresIn: 60 * 60,
      }
    }),
    TypeOrmModule.forFeature([UserRepository])
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy], // 현재 auth.module에서 사용하기 위함
  exports: [JwtStrategy, PassportModule] // 다른 module에서 사용하기 위함
})
export class AuthModule {}
