import type { Tutor } from "../entities/tutor.entity";

export abstract class TutorRepository {
  abstract save(tutor: Tutor): Promise<void>;
  abstract findById(id: string): Promise<Tutor | null>;
  abstract delete(id: string): Promise<void>;
}