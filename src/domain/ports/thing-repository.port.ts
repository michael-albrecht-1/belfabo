import type { Thing } from "../model/thing.model";

export interface ThingRepositoryPort {
  getThings(): Promise<Thing[]>;
}
