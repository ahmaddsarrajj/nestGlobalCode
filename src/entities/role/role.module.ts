import { Module } from '@nestjs/common';
import { RoleService } from './role.service';
import { RoleController } from './role.controller';
import { UserService } from '../user/user.service';
import { UserModule } from '../user/user.module';

@Module({
  controllers: [RoleController],
  providers: [RoleService, UserService],
  imports: [UserModule],
  exports: [RoleService],
})
export class RoleModule {}
