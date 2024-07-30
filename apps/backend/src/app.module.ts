import { APP_FILTER } from '@nestjs/core';
import { PrismaModule } from './../prisma/prisma.module';
import { Global, Module } from '@nestjs/common';
import { GlobalExceptionFilter } from './shared/exceptions/global-exception.filter';
import { PrismaClientExceptionFilter } from 'prisma/prisma-client-exception.filter';

@Global()
@Module({
  exports: [PrismaModule],
  providers: [
    {
      provide: APP_FILTER,
      useClass: GlobalExceptionFilter,
    },
    {
      provide: APP_FILTER,
      useClass: PrismaClientExceptionFilter,
    },
  ],
})
export class AppModule {}
