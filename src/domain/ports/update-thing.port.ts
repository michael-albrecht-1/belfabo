import type { UpdateThingRequest } from "../usecase/update-thing.request";

export interface UpdateThingPort {
  execute(request: UpdateThingRequest): Promise<void>;
}
