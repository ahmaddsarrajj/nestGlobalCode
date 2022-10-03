import { PrismaService } from 'src/prisma/prisma.service';
import { CreateDepartmentDto } from './dto/create-department.dto';
import { UpdateDepartmentDto } from './dto/update-department.dto';
export declare class DepartmentService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createDepartmentDto: CreateDepartmentDto): import(".prisma/client").Prisma.Prisma__DepartmentClient<import(".prisma/client").Department>;
    findAll(): import(".prisma/client").PrismaPromise<import(".prisma/client").Department[]>;
    findOne(id: number): import(".prisma/client").Prisma.Prisma__DepartmentClient<import(".prisma/client").Department & {
        users: import(".prisma/client").users[];
    }>;
    update(id: number, updateDepartmentDto: UpdateDepartmentDto): import(".prisma/client").Prisma.Prisma__DepartmentClient<import(".prisma/client").Department>;
    remove(id: number): import(".prisma/client").Prisma.Prisma__DepartmentClient<import(".prisma/client").Department>;
}
