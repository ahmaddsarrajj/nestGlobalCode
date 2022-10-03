import { IsInt, IsNotEmpty, IsString } from "class-validator";

export class CreateRoleDto {

    @IsNotEmpty()
    @IsString()
    role: string
    
}

export class CreateRoleUserDto {
    @IsNotEmpty()
    @IsInt()
    roleId: number

    @IsNotEmpty()
    @IsInt()
    userId: number
}
