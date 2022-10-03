import { Strategy } from 'passport-jwt';
import { ConfigService } from '@nestjs/config';
import { PrismaService } from 'src/prisma/prisma.service';
import { UserService } from 'src/entities/user/user.service';
declare const JwtStrategy_base: new (...args: any[]) => Strategy;
export declare class JwtStrategy extends JwtStrategy_base {
    private prisma;
    private userService;
    constructor(config: ConfigService, prisma: PrismaService, userService: UserService);
    validate(payload: any): Promise<{
        userId: any;
        username: any;
    }>;
}
export {};
