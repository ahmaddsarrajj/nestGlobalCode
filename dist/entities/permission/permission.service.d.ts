import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateRolePermDto, CreateSubjectDto } from './dto/create-permission.dto';
import { UpdatePermissionDto } from './dto/update-permission.dto';
export declare class PermissionService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createPermissionDto: Prisma.PermissionCreateInput): Prisma.Prisma__PermissionClient<import(".prisma/client").Permission>;
    findAll(): import(".prisma/client").PrismaPromise<import(".prisma/client").Permission[]>;
    findOne(id: number): Prisma.Prisma__PermissionClient<import(".prisma/client").Permission>;
    update(id: number, updatePermissionDto: UpdatePermissionDto): Prisma.Prisma__PermissionClient<import(".prisma/client").Permission>;
    remove(id: number): Prisma.Prisma__PermissionClient<import(".prisma/client").Permission>;
    createSubject(createSubjectDto: CreateSubjectDto): Prisma.Prisma__SubjectClient<import(".prisma/client").Subject>;
    findAllSubjects(): import(".prisma/client").PrismaPromise<import(".prisma/client").Subject[]>;
    findOneSubject(id: number): Promise<import(".prisma/client").Subject>;
    createRolePerm(createRolePermDto: CreateRolePermDto): Prisma.Prisma__RolePermissionClient<import(".prisma/client").RolePermission>;
}
