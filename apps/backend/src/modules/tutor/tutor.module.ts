import { TutorService } from './application/services/tutor.service';
import { TutorController } from './interfaces/controllers/tutor.controller';
/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';

@Module({
  imports: [],
  controllers: [TutorController],
  providers: [TutorService],
})
export class TutorModule {}
