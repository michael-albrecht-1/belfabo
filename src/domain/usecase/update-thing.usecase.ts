import { useThingsStore } from "@/stores/thing";

import type { ThingRepositoryPort } from "../ports/thing-repository.port";
import type { UpdateThingPort } from "../ports/update-thing.port";
import type { UpdateThingRequest } from "./update-thing.request";

export class UpdateThing implements UpdateThingPort {
  constructor(private readonly thingRepository: ThingRepositoryPort) {}

  async execute(request: UpdateThingRequest): Promise<void> {
    const newThing = await this.thingRepository.updateThing(request.thing);

    const state = useThingsStore();

    state.updateThing(newThing);
  }
}
