import { forwardRef, Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { UsersModule } from 'src/users/users.module';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

@Module({
  controllers: [AuthController],
  providers: [AuthService],
  imports: [
    forwardRef(() => UsersModule),
    // UsersModule,
    JwtModule.register({
      secret: 'secret_mosey',
      signOptions: { expiresIn: '24h' },
    }),
  ],
  exports: [JwtModule, AuthService],
})
export class AuthModule {}
