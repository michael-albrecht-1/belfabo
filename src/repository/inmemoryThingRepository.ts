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
}
