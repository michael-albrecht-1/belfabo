import { useThingsStore } from "@/stores/thing";
import type { Thing } from "../model/thing.model";
import type { ThingRepositoryPort } from "../ports/thing-repository.port";
import type { GetThingsPort } from "../ports/get-things.port";

export class GetThings implements GetThingsPort {
  constructor(private readonly thingRepository: ThingRepositoryPort) {}

  async execute(): Promise<Thing[]> {
    const things = await this.thingRepository.getThings();
    const state = useThingsStore();

    state.updateThings(things);
    return state.things;
  }
}
