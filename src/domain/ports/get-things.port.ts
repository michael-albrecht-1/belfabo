import type { Thing } from "../model/thing.model";

export interface GetThingsPort {
  execute(): Promise<Thing[]>;
}
