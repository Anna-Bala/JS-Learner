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
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '../..', 'frontend', 'dist'),
    }),
    AuthModule,
    UsersModule,
    SeedModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.MY_SQL_HOST,
      port: 27920,
      username: process.env.MY_SQL_USERNAME,
      password: process.env.MY_SQL_PASSWORD,
      database: process.env.MY_SQL_DATABASE,
      entities: [User, Level],
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
