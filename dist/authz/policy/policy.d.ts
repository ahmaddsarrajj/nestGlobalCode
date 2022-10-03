import { Ability } from "@casl/ability";
import { AppAbility } from "../ability.factory";
export interface IPolicyHandler {
    handle(ability: Ability): boolean;
}
declare type PolicyHandlerCallback = (ability: AppAbility) => boolean;
export declare type PolicyHandler = IPolicyHandler | PolicyHandlerCallback;
export {};
