import { PrismaService } from 'src/prisma/prisma.service';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UserService {
    private prisma;
    constructor(prisma: PrismaService);
    findByEmail(email: string): Promise<import(".prisma/client").users>;
    getUsers: () => import(".prisma/client").PrismaPromise<import(".prisma/client").users[]>;
    changePassword: (id: number, updateUserDto: UpdateUserDto) => import(".prisma/client").Prisma.Prisma__usersClient<import(".prisma/client").users>;
    findOne(id: number): import(".prisma/client").Prisma.Prisma__usersClient<import(".prisma/client").users>;
}
