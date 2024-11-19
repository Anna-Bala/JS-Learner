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

  async validateUser(password: string, id: number): Promise<any> {
    const user = await this.usersService.fetchUserById(id);

    if (user && compare(user.password, password)) {
      delete user.password;

      return user;
    }
    return null;
  }

  async login(user: any) {
    const payload = { username: user.username, sub: user.userId };

    const userFetched = await this.usersService.fetchUserByUserName(
      user.username as string,
    );

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
