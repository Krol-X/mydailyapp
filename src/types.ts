import type {MouseEventHandler} from "svelte/elements";

export type OnClick = MouseEventHandler<HTMLButtonElement>;

export type Maybe<T> = T | null;

export type Identifiable = { id: number };

export interface Message {
  id?: number;
  text: string;
  created_at: Date;
}
