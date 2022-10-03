import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdateUserDto } from './dto/update-user.dto';
import * as bcrypt from 'bcryptjs';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import { Permission, Prisma, RolePermission, } from '@prisma/client';

@Injectable()
export class UserService {
    constructor(private prisma: PrismaService) { }


    async createUser(createUserDto: CreateUserDto) {


        const hash = await bcrypt.hash(createUserDto.hpassword, 10);
        let data = {
            firstname: createUserDto.firstname,
            lastname: createUserDto.lastname,
            email: createUserDto.email,
            hpassword: hash,
            locale_code: "en",
            department_id: createUserDto.department_id
        }
        const user = this.prisma.users.create({
            data: data

        })
        
        return user;
    }

    //find by email

    async findByEmail(email: string) {
        return await this.prisma.users.findUnique({
            where: {
                email: email
            }
        })
    }

    //find bu username
    async findByUsername(username: string) {
        return await this.prisma.users.findUnique({
            where: {
                email: username
            },
            include: {
                role: {
                    select: {
                        role: true
                    }
                }
            }

        })
    }
    //find all users
    getUsers = () => {
        return this.prisma.users.findMany({
            include: {
                role: {
                    select: {
                        role: true
                    }
                }
            }

        }
        );
    }

    updateUser(id: number, updateUserDto: UpdateUserDto) {
        console.log("test")
        console.log(updateUserDto)

        const user = this.prisma.users.update({
            where: {
                id: id
            },
            data: updateUserDto,
        })
        return user;
    }

    changePassword = (id: number, updateUserDto: UpdateUserDto) => {
        const user = this.prisma.users.update({
            where: {
                id: id
            },
            data: {
                hpassword: updateUserDto.hpassword,
            }
        })
        console.log(updateUserDto.hpassword)
        return user;
    }

    //Get user details
    findOne(id: number) {
        return this.prisma.users.findUnique({ 
            where: { id: id },
            include: {
                role: {
                    select: {
                        role: true
                    }
                }
            }
        });
    }

    async delete(id: number) {
        try{

           let val = await this.prisma.users.delete({ where: { id: id } })
            return "deleted" 

        }catch(err){
           return(err);

        }
        
    }

    async deleteAll() {
        await this.prisma.users.deleteMany({})
    }

    async findAllPermission(user: User) {
        let userQuery: Prisma.usersFindUniqueArgs = {
            where: { id: user.id },
            include: {
                role: {
                    include: {
                        role: {
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
                        }
                    }
                }
            }
        }
        let users: any = await this.prisma.users.findUnique(userQuery)//{
        let permissionsResult: Permission[] = []
        if (users) {
            // console.log({role:JSON.stringify(users)})
            let roles = users.role;
            roles?.map(oneRole => {
                permissionsResult = oneRole.role?.permission?.map(onePermission => onePermission.permission)
            })
        }
        
        return permissionsResult;

    }


    getRoleByUserId(id: number) {
        return this.prisma.users.findUnique({
            where: {
                id: id
            },
            select: {
                role: {
                    select: {
                        user: true
                    }
                }
            }
        })
    }



}