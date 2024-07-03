// src/prisma/prisma-client-exception.filter.ts
import {
  Catch,
  HttpStatus,
  Logger,
  type ArgumentsHost,
  type ExceptionFilter,
} from '@nestjs/common';
import { } from '@prisma/client';
import {
  PrismaClientInitializationError,
  PrismaClientKnownRequestError,
  PrismaClientRustPanicError,
  PrismaClientUnknownRequestError,
  PrismaClientValidationError,
} from '@prisma/client/runtime/library';

@Catch(
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
)
export class PrismaClientExceptionFilter implements ExceptionFilter {
  private readonly logger = new Logger(PrismaClientExceptionFilter.name);


  catch(exception: PrismaClientKnownRequestError, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const request = ctx.getRequest();
    let status = HttpStatus.INTERNAL_SERVER_ERROR;
    let message = 'Internal server error';
    let errorType = 'InternalServerError';
    let details = null;

    if (exception instanceof PrismaClientKnownRequestError) {
      status =
        exception.code === 'P2002'
          ? HttpStatus.CONFLICT
          : HttpStatus.BAD_REQUEST;
      message = exception.message;
      errorType = exception.code;
      details = {
        field: exception.meta?.target,
        value: exception.meta?.targetValue,
        hint: 'Consider using a different value.',
      };
    }

    if (exception instanceof PrismaClientUnknownRequestError) {
      message = 'Unknown database error';
      errorType = 'UnknownRequestError';
      details = exception.message;
    }

    if (exception instanceof PrismaClientRustPanicError) {
      message = 'Database engine panic';
      errorType = 'RustPanicError';
      details = exception.message;
    }

    if (exception instanceof PrismaClientInitializationError) {
      message = 'Database initialization error';
      errorType = 'InitializationError';
      details = exception.message;
    }

    if (exception instanceof PrismaClientValidationError) {
      status = HttpStatus.BAD_REQUEST;
      message = 'Database validation error';
      errorType = 'ValidationError';
      details = {
        field: exception.meta?.target,
        value: exception.meta?.targetValue,
        hint: 'Ensure all required fields are filled and meet the validation criteria.',
      };
    }

    this.logger.error(`${message} - ${errorType}`, exception.stack);

    response.status(status).json({
      statusCode: status,
      message: exception.message,
      error: exception.code,
      details,
      timestamp: new Date().toISOString(),
      path: request.url,
    });
  }
}
