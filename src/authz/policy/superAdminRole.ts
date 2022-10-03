import { AppAbility } from "../ability.factory";
import { Action } from "../action";
import { IPolicyHandler } from "./policy";

export class SuperAdminPolicyHandler implements IPolicyHandler {
    handle(ability: AppAbility) {
      return ability.can(Action.Manage, "all");
    }
  }