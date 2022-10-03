import { CanActivate, ExecutionContext } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { AbilityFactory } from "../ability.factory";
export declare class PolicyGuard implements CanActivate {
    private reflector;
    private abilityFactory;
    constructor(reflector: Reflector, abilityFactory: AbilityFactory);
    canActivate(context: ExecutionContext): Promise<boolean>;
    private isAllowed;
}
