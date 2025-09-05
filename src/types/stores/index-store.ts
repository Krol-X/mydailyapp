import {BaseStore} from "./base-store.svelte";
import type {Maybe} from "../index";

export class IndexStore<T> extends BaseStore<T> {
  find(id: number): Maybe<T> {
    return this._collection[id] ?? null;
  }

  add(item: T): { item: T; id: number } {
    const newId = this._collection.length;
    this._collection = [...this._collection, item];
    return {item, id: newId};
  }

  change(id: number, changes: Partial<T>): void {
    if (this._collection[id]) {
      this._collection = this._collection.map((item, idx) =>
        idx === id ? {...item, ...changes} : item
      );
    }
  }

  remove(id: number): void {
    this._collection = this._collection.filter((_, idx) => idx !== id);
  }
}
