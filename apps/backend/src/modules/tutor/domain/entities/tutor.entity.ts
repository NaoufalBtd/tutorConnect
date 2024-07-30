import type { Tutor as PrismaTutor } from '@prisma/client';
import { AutoSetters } from 'src/shared/decorators/AutoSetters';

@AutoSetters()
export class Tutor implements PrismaTutor {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  bio: string;
  photo: Buffer;
  userId: string;

  constructor(init: Partial<PrismaTutor>) {
    Object.assign(this, init);
  }

}
