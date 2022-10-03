import { UserService } from '../user/user.service';
import { DepartmentService } from './department.service';
import { CreateDepartmentDto } from './dto/create-department.dto';
import { UpdateDepartmentDto } from './dto/update-department.dto';
export declare class DepartmentController {
    private readonly departmentService;
    private user;
    constructor(departmentService: DepartmentService, user: UserService);
    create(createDepartmentDto: CreateDepartmentDto): import(".prisma/client").Prisma.Prisma__DepartmentClient<import(".prisma/client").Department>;
    getUsers(): import(".prisma/client").PrismaPromise<(import(".prisma/client").users & {
        role: {
            role: import(".prisma/client").Role;
        }[];
    })[]>;
    findAll(): import(".prisma/client").PrismaPromise<import(".prisma/client").Department[]>;
    findOne(id: string): import(".prisma/client").Prisma.Prisma__DepartmentClient<import(".prisma/client").Department & {
        users: import(".prisma/client").users[];
    }>;
    update(id: string, updateDepartmentDto: UpdateDepartmentDto): import(".prisma/client").Prisma.Prisma__DepartmentClient<import(".prisma/client").Department>;
    remove(id: string): import(".prisma/client").Prisma.Prisma__DepartmentClient<import(".prisma/client").Department>;
}
