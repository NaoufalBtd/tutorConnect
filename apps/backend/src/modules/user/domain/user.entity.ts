import type { UserType, User as PrismaUser } from '@prisma/client';



export class User implements PrismaUser {
  constructor(
    readonly id: string,
    readonly email: string,
    readonly type: UserType,
    readonly createdAt: Date,
    readonly updatedAt: Date,
    readonly password: string,
    readonly name: string,
    readonly city: string,
    readonly country: string,
    readonly phone: string,
    readonly address: string,
    readonly birthDate: Date,
  ) {}

  // Getters for User properties
  getId(): string {
    return this.id;
  }

  getEmail(): string {
    return this.email;
  }

  getType(): UserType {
    return this.type;
  }

  getCreatedAt(): Date {
    return this.createdAt;
  }

  getUpdatedAt(): Date {
    return this.updatedAt;
  }

  getPassword(): string {
    return this.password;
  }

  getName(): string {
    return this.name;
  }

  getCity(): string {
    return this.city;
  }

  getCountry(): string {
    return this.country;
  }

  getPhone(): string {
    return this.phone;
  }

  getAddress(): string {
    return this.address;
  }

  getBirthDate(): Date {
    return this.birthDate;
  }
}
