import { CustomDecorator, SetMetadata } from "@nestjs/common";
import { Action } from "../action";
import { Subjects } from "../subject/subject";
// action, object
export type Permission = [string, string]
export const PERMISSION_CHECKER_KEY = "permission_checker_params_key";
export const CheckPermissions = (...params: Permission[]): CustomDecorator<string> =>
  SetMetadata(PERMISSION_CHECKER_KEY, params);