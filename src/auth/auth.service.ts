import { ForbiddenException, Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { AuthDto, LoginDto } from "./dto";
import * as bcrypt from "bcryptjs";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime";
import { JwtService } from "@nestjs/jwt";
import { ConfigService } from "@nestjs/config";
import { I18nContext } from "nestjs-i18n";
import { users } from "@prisma/client";
import { UserService } from "src/entities/user/user.service";

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwt: JwtService,
    private config: ConfigService,
    private User: UserService
  ) {}

  async signup(i18n: I18nContext, dto: AuthDto) {
    const hash = await bcrypt.hash(dto.password, 10);

    try {
      let dataInfo = {
        firstname: dto.firstname,
        lastname: dto.lastname,
        email: dto.username,
        hpassword: hash,
        locale_code: "en",
      };

      let User = {};
      let userId = 0;
      let role = {};
      const user = this.prisma.users
        .create({
          data: dataInfo,
        })
        .then((data) => {
          userId = data.id;
         
          role = this.User.findOne(userId).then((user) => {
            user.role?.map((roleObj) => {
              return roleObj.role.role;
            });
          });
        });

      let token = (await this.signToken(userId)).access_token;
      let data = { token, role };
      return data;
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        if (error.code === "P2002")
          throw new ForbiddenException(i18n.t("test.data_not_exist"));
      } else throw new ForbiddenException(`ERROR: ${error}`);
    }
  }

  //--login*------------------------------------
  async login(i18n: I18nContext, dto: LoginDto) {
    const username = dto.username;
    const password = dto.password;

    let user: users = await this.validateUser(username, password);
    if (!user) throw new ForbiddenException("Incorrect Credentials");

    let userId = user.id;
    //let Users = {  firstname, email}
    let role = await this.User.findOne(userId).then((user) => {
      return user.role?.map((roleObj) => {
        return roleObj?.role.role;
      });
    });


    let token = (await this.signToken(userId)).access_token;
    let data = { token, role };
    return data;
  }

  //--------signtoken-----------------------
  async signToken(userId: number): Promise<{ access_token: string }> {
    const payload = {
      sub: userId,
    };
    const secret = this.config.get("jwt_secret");

    const token = await this.jwt.signAsync(payload, {
      expiresIn: "10m",
      secret: secret,
    });

    return {
      access_token: token,
    };
  }

  //----------validate user function----------------
  async validateUser(username: string, password: string): Promise<any> {
    //find the user by email
    const user = await this.User.findByUsername(username);
    //console.log(user);
    //if user does not exist throw error
    if (!user) return null;

    //compare passsword
    const pwMatches = await bcrypt.compare(password, user.hpassword);

    //if password incorrect throw exception
    if (pwMatches) return user;
    //send back the user
    return null;
  }
}
