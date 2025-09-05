import {BaseStore} from "./base-store.svelte";
import type {Identifiable, Maybe} from "../index";

export class IdStore<T extends Identifiable> extends BaseStore<T> {
  find(id: number): Maybe<T> {
    return this._collection.find(item => item.id === id) ?? null;
  }

  add(item: T): void {
    this._collection = [...this._collection, item];
  }

  change(id: number, changes: Partial<T>): void {
    const item = this.find(id);
    if (item) Object.assign(item, changes);
  }

  remove(id: number): void {
    this._collection = this._collection.filter(item => item.id !== id);
  }
}
