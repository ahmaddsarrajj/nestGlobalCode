import { CustomDecorator } from "@nestjs/common";
export declare type Permission = [string, string];
export declare const PERMISSION_CHECKER_KEY = "permission_checker_params_key";
export declare const CheckPermissions: (...params: Permission[]) => CustomDecorator<string>;
