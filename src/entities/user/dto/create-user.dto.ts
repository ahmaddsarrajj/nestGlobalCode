import { IsInt, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateUserDto {
    @IsNotEmpty()
    @IsString()
    firstname: string;

    @IsNotEmpty()
    @IsString()
    lastname: string;

    @IsNotEmpty()
    @IsString()
    email: string;

    @IsNotEmpty()
    @IsString()
	hpassword: string;

    @IsNotEmpty()
    @IsString()
    locale_code: string;

    @IsNotEmpty()
    @IsNumber()
    department_id: number
}
