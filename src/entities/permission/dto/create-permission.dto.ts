import { IsInt, IsJSON, IsNotEmpty, IsString } from "class-validator";

export class CreatePermissionDto {
    
    @IsString()
    @IsNotEmpty()
    action: string

    @IsInt()
    @IsNotEmpty()
    subjectId: number
    
    @IsJSON()
    condition: {}


}

export class CreateSubjectDto {
    @IsString()
    @IsNotEmpty()
    sub: string
}

export class CreateRolePermDto {
    @IsInt()
    @IsNotEmpty()
    roleId: number
    
    @IsInt()
    @IsNotEmpty()
    permissionId: number
    
}