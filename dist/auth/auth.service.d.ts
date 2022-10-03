import { PrismaService } from "src/prisma/prisma.service";
import { AuthDto, LoginDto } from "./dto";
import { JwtService } from "@nestjs/jwt";
import { ConfigService } from "@nestjs/config";
import { I18nContext } from "nestjs-i18n";
import { users } from "@prisma/client";
import { UserService } from "src/entities/user/user.service";
export declare class AuthService {
    private prisma;
    private jwt;
    private config;
    private User;
    constructor(prisma: PrismaService, jwt: JwtService, config: ConfigService, User: UserService);
    signup(i18n: I18nContext, dto: AuthDto): Promise<{
        User: {};
        token: string;
        role: {};
    }>;
    login(i18n: I18nContext, dto: LoginDto): Promise<{
        user: users;
        token: string;
        role: string[];
    }>;
    signToken(userId: number): Promise<{
        access_token: string;
    }>;
    validateUser(username: string, password: string): Promise<any>;
}
