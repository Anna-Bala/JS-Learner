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

  fetchUserByUserName(username: string) {
    return this.userRepository.findOne({ where: { username } });
  }

  async createUser(userDetails: CreateUserParams) {
    const { password, ...user } = userDetails;

    const hashedPassword = await hash(password, 10);

    const newUser = this.userRepository.create({
      ...user,
      password: hashedPassword,
      createdAt: new Date().toISOString(),
      completedTutorial: false,
    });

    return this.userRepository.save(newUser);
  }

  async markTutorialCompleted(id: number) {
    const user = await this.userRepository.findOne({ where: { id } });
    user.completedTutorial = true;

    this.userRepository.save(user);
  }

  deleteUser(id: number) {
    return this.userRepository.delete({ id });
  }
}
