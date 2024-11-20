import {
  Controller,
  Get,
  Post,
  Request,
  Response,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { JwtService } from '@nestjs/jwt';

import { AuthService } from './auth.service';
import { JwtAuthGuard } from './jwt-auth.guard';
import { UsersService } from '../users/services/users/users.service';

@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    private readonly jwtService: JwtService,
    private userService: UsersService,
  ) {}

  @UseGuards(AuthGuard('local'))
  @Post('login')
  async login(@Request() req, @Response() res) {
    const token = await this.authService.login(req.body);

    res.cookie('jwt', token.access_token, {
      httpOnly: true,
      secure: true,
      sameSite: 'strict',
      maxAge: 10 * 60 * 60 * 1000, // 10 hours
    });

    return res.send({
      userId: token.user_id,
      userName: token.username,
      completedTutorial: token.user_completed_tutorial,
    });
  }

  @Get('check')
  @UseGuards(JwtAuthGuard)
  async checkAuth(@Request() req, @Response() res) {
    const token = req.cookies['jwt'];
    if (!token) {
      return res.status(401).json({ isAuthenticated: false });
    }

    try {
      const payload = this.jwtService.verify(token);
      const user = await this.userService.fetchUserById(payload.sub);

      delete user.password;

      return res.json({ isAuthenticated: true, user });
    } catch (error) {
      return res.status(401).json({ isAuthenticated: false });
    }
  }
}
