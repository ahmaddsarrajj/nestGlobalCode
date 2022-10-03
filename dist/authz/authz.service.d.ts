import { User } from 'src/entities/user/entities/user.entity';
import { UserService } from 'src/entities/user/user.service';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class AuthzService {
    private user;
    private prisma;
    constructor(user: UserService, prisma: PrismaService);
    findAllPermissionsOfUser(user: User): Promise<import(".prisma/client").Permission[]>;
    findUniqueSubject(id: number): Promise<import(".prisma/client").Subject>;
}
