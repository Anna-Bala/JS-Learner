import { ConfigModule } from '@nestjs/config';
import { join } from 'path';
import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { Level } from './typeorm/entities/Level';
import { SeedModule } from './seed/seed.module';
import { User } from './typeorm/entities/User';
import { UserLevel } from './typeorm/entities/UserLevel';
import { UserLevelModule } from './user-level/user-level.module';
import { UsersModule } from './users/users.module';
import { LevelsModule } from './levels/levels.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '../..', 'frontend', 'dist'),
    }),
    AuthModule,
    UsersModule,
    SeedModule,
    UserLevelModule,
    LevelsModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.MY_SQL_HOST,
      port: 27920,
      username: process.env.MY_SQL_USERNAME,
      password: process.env.MY_SQL_PASSWORD,
      database: process.env.MY_SQL_DATABASE,
      entities: [User, Level, UserLevel],
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
