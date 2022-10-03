import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { AuthzService } from 'src/authz/authz.service';
export declare class UserController {
    private readonly userService;
    private authzService;
    constructor(userService: UserService, authzService: AuthzService);
    createUser(createUserDto: CreateUserDto): Promise<import(".prisma/client").users>;
    getUsers(): Promise<(import(".prisma/client").users & {
        role: {
            role: import(".prisma/client").Role;
        }[];
    })[]>;
    getUser(id: string): import(".prisma/client").Prisma.Prisma__usersClient<import(".prisma/client").users & {
        role: {
            role: import(".prisma/client").Role;
        }[];
    }>;
    getUserByEmail(email: string): Promise<import(".prisma/client").users>;
    getRoleByUser(id: string): import(".prisma/client").Prisma.Prisma__usersClient<{
        role: {
            user: import(".prisma/client").users;
        }[];
    }>;
    getperm(): Promise<import(".prisma/client").Permission[]>;
    updateUser(id: string, updateUserDto: UpdateUserDto): import(".prisma/client").Prisma.Prisma__usersClient<import(".prisma/client").users>;
    changePassword(id: string, updateUserDto: UpdateUserDto): Promise<import(".prisma/client").users>;
    deleteUser(id: string): Promise<any>;
    deleteAll(): Promise<void>;
}
