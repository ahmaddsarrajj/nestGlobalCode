import { PermissionService } from './permission.service';
import { CreateSubjectDto, CreateRolePermDto } from './dto/create-permission.dto';
import { UpdatePermissionDto } from './dto/update-permission.dto';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class PermissionController {
    private readonly permissionService;
    private prisma;
    constructor(permissionService: PermissionService, prisma: PrismaService);
    create(createPermissionDto: Prisma.PermissionCreateInput): Prisma.Prisma__PermissionClient<import(".prisma/client").Permission>;
    createRoleperm(createRolePermDto: CreateRolePermDto): Prisma.Prisma__RolePermissionClient<import(".prisma/client").RolePermission>;
    createSubject(createSubjectDto: CreateSubjectDto): Prisma.Prisma__SubjectClient<import(".prisma/client").Subject>;
    findAll(): import(".prisma/client").PrismaPromise<import(".prisma/client").Permission[]>;
    findAllSubject(): import(".prisma/client").PrismaPromise<import(".prisma/client").Subject[]>;
    findOne(id: string): Prisma.Prisma__PermissionClient<import(".prisma/client").Permission>;
    findSubject(id: string): Promise<import(".prisma/client").Subject>;
    allRolePerm(): import(".prisma/client").PrismaPromise<import(".prisma/client").RolePermission[]>;
    update(id: string, updatePermissionDto: UpdatePermissionDto): Prisma.Prisma__PermissionClient<import(".prisma/client").Permission>;
    remove(id: string): Prisma.Prisma__PermissionClient<import(".prisma/client").Permission>;
}
