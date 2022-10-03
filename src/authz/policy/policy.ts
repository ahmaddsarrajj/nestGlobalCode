import { Ability } from "@casl/ability";
import { AppAbility } from "../ability.factory";

export interface IPolicyHandler{
    handle(ability: Ability):boolean;
}

type PolicyHandlerCallback = (ability: AppAbility) => boolean;

export type PolicyHandler = IPolicyHandler | PolicyHandlerCallback;