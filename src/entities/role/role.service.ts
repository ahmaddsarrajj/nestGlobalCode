import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateRoleDto, CreateRoleUserDto } from './dto/create-role.dto';
import { UpdateRoleDto, UpdateRoleUserDto } from './dto/update-role.dto';

@Injectable()
export class RoleService {
  constructor(private prisma: PrismaService){}

  create(createRoleDto: CreateRoleDto) {
    let data = {
      role: createRoleDto.role
    }

    return this.prisma.role.create({
      data: data
    })
  }

  createRoleUser(createRoleUserDto: CreateRoleUserDto) {
    let data = {
      roleId: createRoleUserDto.roleId,
      userId: createRoleUserDto.userId
    }

    return this.prisma.roleUser.create({
      data: data
    })
  }

  
/*----------------------------------------------*/

  findAll() {
    return this.prisma.role.findMany()
  }

  findOne(id: number) {
    return this.prisma.role.findUnique({
      where: {
        id: id
      },
      include: {
        permission: {
          include: {
            permission: {
              include: {
                subject: true
              }
            }
          }
        }
      }
    })
  }

  findAllUserRole() {
    return this.prisma.roleUser.findMany()
  }

  // findOneUseRoleByUserId(id: number) {
  //   return this.prisma.roleUser.findUnique({
  //     where: {
  //       roleId_userId: {
  //         roleId: id
  //       }
  //     }
  //   })
  // }
  /*-----------------------------------------*/

  update(id: number, updateRoleDto: UpdateRoleDto) {
    console.log("hi");
    return this.prisma.role.update({
      where: {
        id: id
      },
      data: updateRoleDto
    })

  
  }
  
  updateRoleUser( uId: number, rId: number, createRoleUserDto: CreateRoleUserDto){
    console.log(uId, rId, createRoleUserDto)
    // try{
    //   this.prisma.roleUser.delete({
    //     where: {
    //       roleId_userId:{
    //         roleId: rId,
    //         userId: uId
            
    //       }
    //     }
    //   })
    //   console.log("it's work")
    //   return this.prisma.roleUser.create({
    //     data: {
    //       roleId: createRoleUserDto.roleId,
    //       userId: uId
    //     }
    //   })
  
    // }catch(error){
    //   console.log(error)
    //   return error
    // }
    
    
  }
  remove(id: number) {
    return this.prisma.role.delete({
      where: {
        id: id
      }
    })
  }

 async deleteRoleUser (uId:number) {
  try{
    await this.prisma.users.findUnique({
      where :{
        id:uId
      },
      include: {
        role: {
          include: {
            role:true
          }
        }
      }
    }).then((data)=> {
      const RID = data.role.map(r=>r.role.id)
      this.prisma.roleUser.delete({
        where: {
          roleId_userId:{
            roleId: RID[0],
            userId: uId
          }
        }
      })
    })
     
    
 } catch(err){
  return err
 }
 }
}