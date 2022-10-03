import { CanActivate, ConsoleLogger, ExecutionContext, ForbiddenException, Injectable } from "@nestjs/common";
import { Reflector } from "@nestjs/core";

import { AbilityFactory, AppAbility } from "../ability.factory";
import { Action } from "../action";
import { Permission, PERMISSION_CHECKER_KEY } from "../decorator";
import { PolicyHandler } from "./policy";

@Injectable()
export class PolicyGuard implements CanActivate {
  constructor(
    private reflector: Reflector,
    private abilityFactory: AbilityFactory
  ) { }

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const policyHandlers =
      this.reflector.get<Permission[]>(
        PERMISSION_CHECKER_KEY,
        context.getHandler(),
      ) || [];

      // const user = {
      //   id:4,
      //   firstname: "fd",
      //   lastname: "df",
      //   email: "df",
      //   hpassword: "df",
      //   locale_code: 'en',
      //   department_id: 3
      // }
    const req = context.switchToHttp().getRequest();
    const { user } = req.user;

  //  console.log("User in Policy Guard: ",user);
     
    if (!user) throw new ForbiddenException();
    
    const ability = await this.abilityFactory.createForUser(user);
     console.log(ability)
     
     return policyHandlers.every((permission) =>
     this.isAllowed(ability, permission));
   // 
     //=> return boolean
  }
  private isAllowed(ability: AppAbility, permission: Permission) {
     return (ability.can(...permission)) 
  }
}