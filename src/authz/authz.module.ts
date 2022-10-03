import { Module } from '@nestjs/common';
import { PermissionModule } from 'src/entities/permission/permission.module';
import { PermissionService } from 'src/entities/permission/permission.service';
import { UserModule } from 'src/entities/user/user.module';
import { UserService } from 'src/entities/user/user.service';
import { AbilityFactory } from './ability.factory';
// import { AbilityFactory } from './ability.factory';
import { AuthzController } from './authz.controller';
import { AuthzService } from './authz.service';
import { PolicyGuard } from './policy/policy.guard';

@Module({
    controllers: [AuthzController],
    imports: [UserModule, PermissionModule],
    providers: [ 
        AuthzService,
        AbilityFactory, 
        PolicyGuard, 
        UserService,
        PermissionService
    ],
    exports: [AuthzService, AbilityFactory, PolicyGuard],
})
export class AuthzModule {}
