import type {Maybe} from "../index";

export abstract class BaseStore<T> {
  protected _collection = $state<T[]>([]);
  protected _current = $state<Maybe<T>>(null);

  constructor(initialItems: T[] = [], current: Maybe<number> = null) {
    this._collection = initialItems;
    this.use(current);
  }

  get collection(): Readonly<T[]> {
    return this._collection;
  }

  get current(): Maybe<Readonly<T>> {
    return this._current;
  }

  abstract find(id: number): Maybe<T>;

  use(id: Maybe<number>): Maybe<T> {
    this._current = id ? this.find(id) : null;
    return this._current;
  }
}
