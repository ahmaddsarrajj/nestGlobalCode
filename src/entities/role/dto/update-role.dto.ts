import { PartialType } from '@nestjs/mapped-types';
import { CreateRoleDto, CreateRoleUserDto } from './create-role.dto';

export class UpdateRoleDto extends PartialType(CreateRoleDto) {}

export class UpdateRoleUserDto extends PartialType(CreateRoleUserDto) {}