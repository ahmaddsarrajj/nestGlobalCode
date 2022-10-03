import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { AuthzService } from 'src/authz/authz.service';
import { AbilityFactory } from 'src/authz/ability.factory';
import { PermissionModule } from '../permission/permission.module';
import { PermissionService } from '../permission/permission.service';

@Module({
  controllers: [UserController],
  providers: [
    UserService,
    AuthzService,
    AbilityFactory,
    PermissionService
  ],
  exports:  [UserService],
  imports: [PermissionModule]
})
export class UserModule {}
