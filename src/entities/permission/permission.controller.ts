import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PermissionService } from './permission.service';
import { CreatePermissionDto, CreateSubjectDto, CreateRolePermDto } from './dto/create-permission.dto';
import { UpdatePermissionDto } from './dto/update-permission.dto';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Controller('permission')
export class PermissionController {
  constructor(private readonly permissionService: PermissionService, private prisma: PrismaService) {}

  @Post('create')
  create(@Body() createPermissionDto: Prisma.PermissionCreateInput) {
    return this.permissionService.create(createPermissionDto);
  }

  
  @Post('rolePerm')
  createRoleperm(@Body() createRolePermDto: CreateRolePermDto) {
    return this.permissionService.createRolePerm(createRolePermDto)
  }

  @Post('subject')
  createSubject(@Body() createSubjectDto: CreateSubjectDto){
    return this.permissionService.createSubject(createSubjectDto)
  }

  @Get()
  findAll() {
    return this.permissionService.findAll();
  }

  @Get('subjects')
  findAllSubject() {
    return this.permissionService.findAllSubjects();
  }

  @Get('perm/:id')
  findOne(@Param('id') id: string) {
    return this.permissionService.findOne(+id);
  }

  @Get('subjects/:id')
  findSubject (@Param('id') id: string) {
    return this.permissionService.findOneSubject(+id);
  }

  @Get('rolePerm')
  allRolePerm () {
    return this.prisma.rolePermission.findMany()
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePermissionDto: UpdatePermissionDto) {
    return this.permissionService.update(+id, updatePermissionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.permissionService.remove(+id);
  }

}
