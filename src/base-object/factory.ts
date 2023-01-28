import { DataStore } from './data-store';

export abstract class Factory<T, STORE extends DataStore> {
  dataStore: STORE;

  constructor(dataStore: STORE) {
    this.dataStore = dataStore;
  }

  abstract create(): T;
}
