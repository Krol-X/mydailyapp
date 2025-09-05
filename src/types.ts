import type {MouseEventHandler} from "svelte/elements";

export type OnClick = MouseEventHandler<HTMLButtonElement>;

export type Maybe<T> = T | null;

export type Identifiable = { id: number };

export interface TaskObject extends Identifiable {
  id: number;
  text: string;
  result: Maybe<string>;
  elapsed: Maybe<number>;
}
