import { EntityData, PropList } from './types';

/**
 * Сушность
 */
export class Entity<PROPS extends PropList = PropList> {
  protected data!: EntityData<PROPS>;

  get name(): string {
    return this.data.name;
  }

  get id(): string {
    return this.data.id;
  }

  get description(): string {
    return this.data.description;
  }

  get properties(): PROPS {
    return this.data.properties;
  }

  constructor(data?: EntityData<PROPS>) {
    if (data) this.data = data;
  }

  getProperty<K extends keyof PROPS>(propName: K): PROPS[K] {
    return this.data.properties[propName];
  }
}
