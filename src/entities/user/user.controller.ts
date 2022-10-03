import { Controller, Get, Post, Body, Patch, Param, Delete, Put,Logger, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { AuthzService } from 'src/authz/authz.service';
import { PolicyGuard } from 'src/authz/policy/policy.guard';
import { CheckPermissions } from 'src/authz/decorator';
import { SuperAdminPolicyHandler } from 'src/authz/policy/superAdminRole';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService, private authzService: AuthzService) { }

  @Post()
  async createUser(@Body() createUserDto: CreateUserDto) {
    return await this.userService.createUser(createUserDto);
  }

  @UseGuards(PolicyGuard)
  @CheckPermissions(["read","User"])
  @Get('all')
  async getUsers() {
    return await this.userService.getUsers();
  }

  @Get(':id')
  getUser(@Param('id') id: string) {
    return this.userService.findOne(+id);
  }


  @Get('byEmail/:email')
  async getUserByEmail(@Param('email') email: string) {
    return this.userService.findByEmail(email)
  }

  @Get('role/:id')
  getRoleByUser (@Param('id') id: string) {
    return this.userService.getRoleByUserId(+id);
  }
  @Get('permissions/list')
  getperm (){
    const user: User = {
      id:22,
      firstname: "fd",
      lastname: "df",
      email: "df",
      hpassword: "df",
      locale_code: 'en',
      department_id: 3
    }
    console.log(this.authzService.findAllPermissionsOfUser(user).then((data)=>console.log(data)))
    return this.authzService.findAllPermissionsOfUser(user)
    
  }

  @Patch(':id')
  updateUser(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    console.log("cntrlr")
    return this.userService.updateUser(+id, updateUserDto);
  }

 

  @Delete(':id')
  deleteUser(@Param('id') id: string) {
    return  this.userService.delete(+id)
  }

@Delete()
async deleteAll() {
  return await this.userService.deleteAll()
}



}
