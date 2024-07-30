/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';

@Injectable()
export class TutorService {
  async signup() {
    return 'signup'; //todo: create the signup service.
  }
}
