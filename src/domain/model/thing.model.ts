export type Thing = {
  uuid: string;
  title: string;
  state: ThingState;
};

export enum ThingState {
  TODO = "todo",
  DONE = "done",
}
