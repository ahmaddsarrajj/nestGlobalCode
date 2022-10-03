export declare class CreatePermissionDto {
    action: string;
    subjectId: number;
    condition: {};
}
export declare class CreateSubjectDto {
    sub: string;
}
export declare class CreateRolePermDto {
    roleId: number;
    permissionId: number;
}
