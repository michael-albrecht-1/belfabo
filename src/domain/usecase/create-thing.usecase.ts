import { useThingsStore } from "@/stores/thing";
import type { Thing } from "../model/thing.model";
import type { CreateThingPort } from "../ports/create-thing.port";
import type { ThingRepositoryPort } from "../ports/thing-repository.port";

export class CreateThing implements CreateThingPort {
  constructor(private readonly thingRepository: ThingRepositoryPort) {}

  async execute(title: string): Promise<void> {
    const newThing = await this.thingRepository.createThing(title);

    const state = useThingsStore();

    state.addThing(newThing);
  }
}
