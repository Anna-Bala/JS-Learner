import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { CreateUser } from '../../dtos/CreateUser.dto';
import { UsersService } from '../../services/users/users.service';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Get()
  async getUsers() {
    const users = await this.userService.fetchUsers();
    return users;
  }

  @Post()
  async createUser(@Body() createUserDto: CreateUser) {
    const result = await this.userService.createUser(createUserDto);

    delete result.password;

    return result;
  }

  @Put(':id/tutorial')
  async markTutorialCompleted(@Param('id', ParseIntPipe) id: number) {
    await this.userService.markTutorialCompleted(id);
  }

  @Delete(':id')
  async deleteUserById(@Param('id', ParseIntPipe) id: number) {
    await this.userService.deleteUser(id);
  }
}
