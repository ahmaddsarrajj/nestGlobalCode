import { RoleService } from './role.service';
import { CreateRoleDto, CreateRoleUserDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class RoleController {
    private readonly roleService;
    private prisma;
    constructor(roleService: RoleService, prisma: PrismaService);
    create(createRoleDto: CreateRoleDto): import(".prisma/client").Prisma.Prisma__RoleClient<import(".prisma/client").Role>;
    createRoleUser(createRoleUserDto: CreateRoleUserDto): import(".prisma/client").Prisma.Prisma__RoleUserClient<import(".prisma/client").RoleUser>;
    findAll(): import(".prisma/client").PrismaPromise<import(".prisma/client").Role[]>;
    findAllUsersRoles(): import(".prisma/client").PrismaPromise<import(".prisma/client").RoleUser[]>;
    findOne(id: string): import(".prisma/client").Prisma.Prisma__RoleClient<import(".prisma/client").Role & {
        permission: (import(".prisma/client").RolePermission & {
            permission: import(".prisma/client").Permission & {
                subject: import(".prisma/client").Subject;
            };
        })[];
    }>;
    update(id: string, updateRoleDto: UpdateRoleDto): import(".prisma/client").Prisma.Prisma__RoleClient<import(".prisma/client").Role>;
    roleUserUpdate(uId: number, rId: number, createRoleUserDto: CreateRoleUserDto): void;
    remove(id: string): import(".prisma/client").Prisma.Prisma__RoleClient<import(".prisma/client").Role>;
    dl(uId: string): Promise<void>;
}
