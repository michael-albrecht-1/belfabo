import type { Thing } from "../model/thing.model";

export class UpdateThingRequest {
  constructor(public readonly thing: Thing) {}
}
