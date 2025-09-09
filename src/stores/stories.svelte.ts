import {IdStore} from "../types/stores";
import type {Identifiable} from "../types";

export interface Story extends Identifiable<string> {
  text: string;
  created_at: Date;
}

export class Stories extends IdStore<Story> {
}

export let stories = new Stories()
