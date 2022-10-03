import { PrismaService } from 'src/prisma/prisma.service';
import { CreateRoleDto, CreateRoleUserDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
export declare class RoleService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createRoleDto: CreateRoleDto): import(".prisma/client").Prisma.Prisma__RoleClient<import(".prisma/client").Role>;
    createRoleUser(createRoleUserDto: CreateRoleUserDto): import(".prisma/client").Prisma.Prisma__RoleUserClient<import(".prisma/client").RoleUser>;
    findAll(): import(".prisma/client").PrismaPromise<import(".prisma/client").Role[]>;
    findOne(id: number): import(".prisma/client").Prisma.Prisma__RoleClient<import(".prisma/client").Role & {
        permission: (import(".prisma/client").RolePermission & {
            permission: import(".prisma/client").Permission & {
                subject: import(".prisma/client").Subject;
            };
        })[];
    }>;
    findAllUserRole(): import(".prisma/client").PrismaPromise<import(".prisma/client").RoleUser[]>;
    update(id: number, updateRoleDto: UpdateRoleDto): import(".prisma/client").Prisma.Prisma__RoleClient<import(".prisma/client").Role>;
    updateRoleUser(uId: number, rId: number, createRoleUserDto: CreateRoleUserDto): void;
    remove(id: number): import(".prisma/client").Prisma.Prisma__RoleClient<import(".prisma/client").Role>;
    deleteRoleUser(uId: number): Promise<any>;
}
