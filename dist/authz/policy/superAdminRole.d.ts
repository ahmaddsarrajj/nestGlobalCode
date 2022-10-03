import { AppAbility } from "../ability.factory";
import { IPolicyHandler } from "./policy";
export declare class SuperAdminPolicyHandler implements IPolicyHandler {
    handle(ability: AppAbility): boolean;
}
