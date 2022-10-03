import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';
import * as path from 'path';
import { I18nModule, QueryResolver, AcceptLanguageResolver } from 'nestjs-i18n';
import { appController } from './app.controller';
import { UserModule } from './entities/user/user.module';
import { NetworkModule } from './entities/network/network.module';
import { HInstituationModule } from './entities/h_instituation/h_instituation.module';
import { DepartmentModule } from './entities/department/department.module';
import { RoleModule } from './entities/role/role.module';
import { PermissionModule } from './entities/permission/permission.module';


@Module({
  imports: [
    AuthModule,
    UserModule,
    PrismaModule,
    ConfigModule.forRoot({ isGlobal: true }),
    I18nModule.forRoot({
      fallbackLanguage: 'en',
      loaderOptions: {
        path: path.join(__dirname, '/i18n/'),
        watch: true,
      },
         resolvers: [
        { use: QueryResolver, options: ['lang'] },
        AcceptLanguageResolver,
      ],
    }),
    NetworkModule,
    HInstituationModule,
    DepartmentModule,
    RoleModule,
    PermissionModule],
    controllers: [appController]

})
export class AppModule { }
