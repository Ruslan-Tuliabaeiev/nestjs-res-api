import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { AuthModule } from './auth/auth.module';

import { UsersModule } from './users/users.module';
import { AppController } from './app.controller';
import { User } from './users/user.model';


@Module({
  controllers: [AppController],
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '12345678',
      database: 'nest-cours',
      models: [User],
      autoLoadModels: true,
    }),

    UsersModule,
    AuthModule,
    // EventsModule,
  ],
})
export class AppModule {}
