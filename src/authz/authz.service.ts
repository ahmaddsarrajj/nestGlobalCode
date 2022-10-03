import { Injectable } from '@nestjs/common';
import { User } from 'src/entities/user/entities/user.entity';
import { UserService } from 'src/entities/user/user.service';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AuthzService {
    constructor(private user: UserService, private prisma: PrismaService){}

    async findAllPermissionsOfUser(user: User) {
        return await this.user.findAllPermission(user)
    }

    async findUniqueSubject(id: number) {
        return await this.prisma.subject.findUnique({
            where: {
                id: id
            }
        })
    }
}