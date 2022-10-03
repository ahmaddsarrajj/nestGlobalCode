import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PrismaModule } from 'src/prisma/prisma.module';
import { UserModule } from 'src/entities/user/user.module';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtStrategy } from '../strategy/jwt.strategy';
import { LocalStrategy } from '../strategy/local.strategy';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { UserService } from 'src/entities/user/user.service';
@Module({
    imports: [JwtModule.registerAsync({
        imports:[ConfigModule],
        useFactory : async (configService: ConfigService) =>({
            secret:configService.get('jwt_secret')}),
            inject:[ConfigService]
        }), UserModule,],
            
    controllers: [AuthController],
    providers: [AuthService, JwtStrategy, LocalStrategy, UserService]
})
export class AuthModule {}