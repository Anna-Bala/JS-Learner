import { hash } from 'bcrypt';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateUserParams } from 'src/utils/types';
import { User } from '../../../typeorm/entities/User';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  fetchUsers() {
    return this.userRepository.find();
  }

  fetchUserById(id: number) {
    return this.userRepository.findOne({ where: { id } });
  }

  async createUser(userDetails: CreateUserParams) {
    const { password, ...user } = userDetails;

    const hashedPassword = await hash(password, 10);

    const newUser = this.userRepository.create({
      ...user,
      password: hashedPassword,
      createdAt: new Date().toISOString(),
    });

    return this.userRepository.save(newUser);
  }

  deleteUser(id: number) {
    return this.userRepository.delete({ id });
  }
}
