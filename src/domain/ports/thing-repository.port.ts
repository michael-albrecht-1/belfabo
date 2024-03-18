import type { Thing } from "../model/thing.model";

export interface ThingRepositoryPort {
  getThings(): Promise<Thing[]>;
  createThing(title: string): Promise<Thing>;
  updateThing(thing: Thing): Promise<Thing>;
}
