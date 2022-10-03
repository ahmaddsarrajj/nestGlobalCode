import { Ability } from "@casl/ability";
import { users } from "@prisma/client";
import { PermissionCondition } from "src/entities/permission/entities/permission.entity";
import { AuthzService } from "./authz.service";
import { PermissionService } from "src/entities/permission/permission.service";
export declare type AppAbility = Ability<[string, string]>;
export interface CaslPermission {
    action: string;
    subject: string;
    condition?: PermissionCondition;
}
export declare class AbilityFactory {
    private authoService;
    private permission;
    constructor(authoService: AuthzService, permission: PermissionService);
    createForUser(user: users): Promise<void>;
}
