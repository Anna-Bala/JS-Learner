import { compare } from 'bcrypt';
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { UsersService } from '../users/services/users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(password: string, username: string): Promise<any> {
    const user = await this.usersService.fetchUserByUserName(username);

    if (!user) {
      return null;
    }

    const isPasswordMatch = await compare(password, user.password);

    if (isPasswordMatch) {
      delete user.password;
      return user;
    }
    return null;
  }

  async login(user: any) {
    const userFetched = await this.usersService.fetchUserByUserName(
      user.username as string,
    );

    const payload = { username: userFetched.username, sub: userFetched.id };

    const user_id = userFetched.id;
    const user_completed_tutorial = userFetched.completedTutorial;

    return {
      access_token: this.jwtService.sign(payload),
      user_id,
      username: user.username,
      user_completed_tutorial,
    };
  }
}
