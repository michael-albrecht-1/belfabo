export type ItemModel = {
  uuid: string;
  title: string;
  state: ItemState;
};

export enum ItemState {
  TODO = "todo",
  DONE = "done",
}
