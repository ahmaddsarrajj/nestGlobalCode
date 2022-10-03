import { Body, Controller, HttpCode, HttpStatus, Post, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto, LoginDto } from './dto';
import { I18n, I18nContext } from 'nestjs-i18n';
import { LocalAuthGuard } from './guard/local.guard';
import { UserService } from 'src/entities/user/user.service';

@Controller('user')
export class AuthController {
    constructor(private authService: AuthService, private User: UserService) { }

    @Post('signup')
    async signup(@I18n() i18n: I18nContext, @Body() dto: AuthDto) {
        return this.authService.signup(i18n, dto);
        
    }

    @UseGuards(LocalAuthGuard)
    @HttpCode(HttpStatus.OK)
    @Post('login')
    login(@I18n() i18n: I18nContext, @Body() dto: LoginDto) {
        
         return this.authService.login(i18n, dto)
         
    }
}
