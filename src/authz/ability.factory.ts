import { Ability, AbilityBuilder, AbilityClass, ExtractSubjectType } from "@casl/ability";
import { Injectable } from "@nestjs/common";
import { Permission, users } from "@prisma/client";
import { Permissionn, PermissionCondition } from "src/entities/permission/entities/permission.entity";
import { AuthzService } from "./authz.service";
import { PermissionService } from "src/entities/permission/permission.service";


// export type PermissionObjectType = any;
export type AppAbility = Ability<[ string, string]>;
 
export interface CaslPermission {
    action: string;
    subject: string;
    condition?: PermissionCondition;
}

@Injectable()
export class AbilityFactory {
    constructor(
        private authoService: AuthzService,
        private permission: PermissionService
         ) { }

         
    async createForUser(user: users) {        
        
        const dbPermissions :Permission[] =  await this.authoService.findAllPermissionsOfUser(user);
       
       
         const caslPermissions :CaslPermission[] = dbPermissions.map(async (p) => {
            
             
             let su: string = await this.permission.findOneSubject(p.subjectId).then(data=>  data.sub);
            
             return {
                 action: p.action,
                 subject: su,
                 conditions: Permissionn.parseCondition(p.condition, user)
         }})

       
        return new Ability<[string, string]>(caslPermissions);
        
        
    }
}
