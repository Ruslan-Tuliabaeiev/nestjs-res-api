import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { JWtAuthGuard } from '../auth/jwt-auth.guard';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Post()
  create(@Body() userDto: CreateUserDto) {
    return this.userService.createUsers(userDto);
  }

  @UseGuards(JWtAuthGuard)
  @Get()
  getAll() {
    return this.userService.getAllUsers();
  }
}
