import { PrismaService } from 'src/prisma/prisma.service';
import { UpdateUserDto } from './dto/update-user.dto';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import { Permission, Prisma } from '@prisma/client';
export declare class UserService {
    private prisma;
    constructor(prisma: PrismaService);
    createUser(createUserDto: CreateUserDto): Promise<import(".prisma/client").users>;
    findByEmail(email: string): Promise<import(".prisma/client").users>;
    findByUsername(username: string): Promise<import(".prisma/client").users & {
        role: {
            role: import(".prisma/client").Role;
        }[];
    }>;
    getUsers: () => import(".prisma/client").PrismaPromise<(import(".prisma/client").users & {
        role: {
            role: import(".prisma/client").Role;
        }[];
    })[]>;
    updateUser(id: number, updateUserDto: UpdateUserDto): Prisma.Prisma__usersClient<import(".prisma/client").users>;
    changePassword: (id: number, updateUserDto: UpdateUserDto) => Prisma.Prisma__usersClient<import(".prisma/client").users>;
    findOne(id: number): Prisma.Prisma__usersClient<import(".prisma/client").users & {
        role: {
            role: import(".prisma/client").Role;
        }[];
    }>;
    delete(id: number): Promise<any>;
    deleteAll(): Promise<void>;
    findAllPermission(user: User): Promise<Permission[]>;
    getRoleByUserId(id: number): Prisma.Prisma__usersClient<{
        role: {
            user: import(".prisma/client").users;
        }[];
    }>;
}
