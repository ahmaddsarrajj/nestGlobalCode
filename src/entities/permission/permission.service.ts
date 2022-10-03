import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateRolePermDto, CreateSubjectDto } from './dto/create-permission.dto';
import { UpdatePermissionDto } from './dto/update-permission.dto';

@Injectable()
export class PermissionService {
  constructor(private prisma: PrismaService){}


  create(createPermissionDto:Prisma.PermissionCreateInput ) {
    return this.prisma.permission.create({
      data: createPermissionDto
    });
  }

  findAll() {
    return this.prisma.permission.findMany()
  }

  findOne(id: number) {
    return this.prisma.permission.findUnique({
      where: {
        id: id
      }
    })
  }

  update(id: number, updatePermissionDto: UpdatePermissionDto) {
    return this.prisma.permission.update({
      where: {
        id: id
      },
      data: updatePermissionDto
    });
  }

  remove(id: number) {
    return this.prisma.permission.delete({
      where: {
        id: id
      }
    });
  }

  createSubject (createSubjectDto: CreateSubjectDto){

    return this.prisma.subject.create({
      data: {
        sub: createSubjectDto.sub
      }
    })
  }

  findAllSubjects (){
    return this.prisma.subject.findMany();
  }

async findOneSubject (id: number) {

    const su = await this.prisma.subject.findUnique({
      where: {
        id: id
      }
    })
    return su;
  } 

  createRolePerm ( createRolePermDto: CreateRolePermDto) {
    return this.prisma.rolePermission.create({
      data: {
        roleId: createRolePermDto.roleId,
        permissionId: createRolePermDto.permissionId
      }
    })
  }

  
}

  