import {BaseStore} from "./base-store.svelte";
import type {Identifiable, Maybe} from "../index";

export class IdStore<T extends Identifiable<any>> extends BaseStore<T> {
  find(id: any): Maybe<T> {
    return this._collection.find(item => item.id === id) ?? null;
  }

  add(item: T): void {
    this._collection = [...this._collection, item];
  }

  change(id: any, changes: Partial<T>): void {
    const item = this.find(id);
    if (item) Object.assign(item, changes);
  }

  remove(id: any): void {
    this._collection = this._collection.filter(item => item.id !== id);
  }
}
