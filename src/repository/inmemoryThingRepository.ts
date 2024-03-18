import { ThingState, type Thing } from "@/domain/model/thing.model";
import type { ThingRepositoryPort } from "@/domain/ports/thing-repository.port";

const things: Thing[] = [
  { uuid: "1", title: "huile", state: ThingState.TODO },
  { uuid: "2", title: "chips", state: ThingState.DONE },
  { uuid: "3", title: "biere", state: ThingState.DONE },
  { uuid: "4", title: "saucisson", state: ThingState.DONE },
  { uuid: "5", title: "fromage", state: ThingState.TODO },
];

export class InmemoryThingRepository implements ThingRepositoryPort {
  private things: Thing[] = [];

  constructor() {
    this.things = things;
  }

  async getThings(): Promise<Thing[]> {
    return this.things;
  }

  async createThing(title: string): Promise<Thing> {
    const thing: Thing = {
      uuid: Math.random().toString(36).substring(7),
      title,
      state: ThingState.TODO,
    };
    this.things.push(thing);
    return thing;
  }

  async updateThing(thing: Thing): Promise<Thing> {
    const index = this.things.findIndex((t) => t.uuid === thing.uuid);
    if (index === -1) {
      throw new Error("Thing not found");
    }
    this.things[index] = thing;
    return thing;
  }
}
