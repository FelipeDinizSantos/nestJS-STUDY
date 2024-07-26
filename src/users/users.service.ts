import { PrismaClient } from '@prisma/client';
import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private Prisma: PrismaService) {}

  async create(createUserDto: CreateUserDto) : Promise<User>{
    const {email, name, password, birthAt} = createUserDto;

    let user = await this.Prisma.user.create({
      data: {
        name,
        email,
        password,
        birthAt: birthAt? new Date(birthAt) : null,
      }
    })

    return user;
  }

  findAll() {
    return `This action returns all users`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
