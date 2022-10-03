import { UserService } from './user.service';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    getUsers(): Promise<import(".prisma/client").users[]>;
    getUser(id: string): import(".prisma/client").Prisma.Prisma__usersClient<import(".prisma/client").users>;
    changePassword(id: string, updateUserDto: UpdateUserDto): Promise<import(".prisma/client").users>;
}
