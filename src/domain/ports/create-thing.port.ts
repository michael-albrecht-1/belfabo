import type { Thing } from "../model/thing.model";

export interface CreateThingPort {
  execute(title: string): Promise<void>;
}
