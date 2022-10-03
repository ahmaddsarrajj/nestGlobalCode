import { AuthService } from './auth.service';
import { AuthDto, LoginDto } from './dto';
import { I18nContext } from 'nestjs-i18n';
import { UserService } from 'src/entities/user/user.service';
export declare class AuthController {
    private authService;
    private User;
    constructor(authService: AuthService, User: UserService);
    signup(i18n: I18nContext, dto: AuthDto): Promise<{
        User: {};
        token: string;
        role: {};
    }>;
    login(i18n: I18nContext, dto: LoginDto): Promise<{
        user: import(".prisma/client").users;
        token: string;
        role: string[];
    }>;
}
