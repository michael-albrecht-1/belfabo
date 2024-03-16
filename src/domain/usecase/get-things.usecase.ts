import type { Thing } from "../model/thing.model";
import type { GetThingsPort } from "../ports/get-things.port";
import type { ThingRepositoryPort } from "../ports/thing-repository.port";

export class GetThings implements GetThingsPort {
  constructor(private readonly thingRepository: ThingRepositoryPort) {}

  async execute(): Promise<Thing[]> {
    return this.thingRepository.getThings();
  }
}
