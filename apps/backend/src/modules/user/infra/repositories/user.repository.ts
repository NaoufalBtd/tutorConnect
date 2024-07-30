import type { PrismaService } from 'prisma/prisma.service';
import type { UserType } from '@prisma/client';
import { User } from '../../domain/user.entity';

export class UserRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async findById(id: string): Promise<User | null> {
    const prismaUser = await this.prismaService.user.findUnique({
      where: { id },
    });
    if (!prismaUser) return null;

    return new User(
      prismaUser.id,
      prismaUser.email,
      prismaUser.type,
      prismaUser.createdAt,
      prismaUser.updatedAt,
    );
  }

  async updateUserRole(id: string, newRole: UserType): Promise<void> {
    await this.prismaService.user.update({
      where: { id },
      data: { type: newRole },
    });
  }

  async createUser(
    email: string,
    password: string,
    type: UserType,
  ): Promise<User> {
    const prismaUser = await this.prismaService.user.create({
      data: {
        email,
        password,
        type,
      },
    });

    return new User(
      prismaUser.id,
      prismaUser.email,
      prismaUser.type,
      prismaUser.createdAt,
      prismaUser.updatedAt,
    );
  }
}
