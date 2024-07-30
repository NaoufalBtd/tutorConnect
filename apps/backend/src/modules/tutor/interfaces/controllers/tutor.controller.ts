/*
https://docs.nestjs.com/controllers#controllers
*/

import { Controller, Post } from '@nestjs/common';

@Controller('tutor')
export class TutorController {

  @Post('signup')
  async signup() {
    return 'signup'; //todo: create the signup service.
  }
}
