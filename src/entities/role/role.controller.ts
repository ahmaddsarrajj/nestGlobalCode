import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RoleService } from './role.service';
import { CreateRoleDto, CreateRoleUserDto } from './dto/create-role.dto';
import { UpdateRoleDto, UpdateRoleUserDto } from './dto/update-role.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Controller('role')
export class RoleController {
  constructor(private readonly roleService: RoleService, private prisma: PrismaService) {}

  @Post()
  create(@Body() createRoleDto: CreateRoleDto) {
    return this.roleService.create(createRoleDto);
  }

  @Post('/roleUser')
  createRoleUser(@Body() createRoleUserDto: CreateRoleUserDto) {
    return this.roleService.createRoleUser(createRoleUserDto)
  }

  @Get()
  findAll() {
    return this.roleService.findAll();
  }
  
  @Get('usersRoles')
  findAllUsersRoles() {
    return this.roleService.findAllUserRole();
  }

  @Get('role/:id')
  findOne(@Param('id') id: string) {
    return this.roleService.findOne(+id);
  }

  

  @Patch('role/:id')
  update(@Param('id') id: string, @Body() updateRoleDto: UpdateRoleDto) {
    return this.roleService.update(+id, updateRoleDto);
  }

  @Post('roleUsers')
  roleUserUpdate(uId: number, rId:number, @Body() createRoleUserDto: CreateRoleUserDto) {
    console.log(rId, uId, createRoleUserDto)
    return this.roleService.updateRoleUser( uId, rId, createRoleUserDto)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.roleService.remove(+id);
  }

  @Delete('roleUser/delete/:uid')
  async dl(@Param('uId') uId: string) {
  this.roleService.deleteRoleUser(+uId)  
  }
}
