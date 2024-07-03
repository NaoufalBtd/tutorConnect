import { APP_FILTER } from '@nestjs/core';
import { PrismaModule } from './../prisma/prisma.module';
import { Global, Module } from '@nestjs/common';
import { GlobalExceptionFilter } from './shared/exceptions/global-exception.filter';

@Global()
@Module({
  exports: [PrismaModule],
  providers: [
    {
      provide: APP_FILTER,
      useClass: GlobalExceptionFilter,
    },
  ],
})
export class AppModule {}
