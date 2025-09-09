import type {MouseEventHandler} from "svelte/elements";

export type OnClick = MouseEventHandler<HTMLButtonElement>;

export type Maybe<T> = T | null;
export type Identifiable<T> = { id: T };
