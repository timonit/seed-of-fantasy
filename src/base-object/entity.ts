import { Property } from './property';
import { EntityData, PropertyList } from './types';

/**
 * Самый базовый объект всех сущностей.
 */
export class Entity<PROPS extends PropertyList = PropertyList> {
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

  getProperty<V>(propName: string): Property<V> {
    return this.data.properties[propName];
  }

  setData(data: EntityData<PROPS>) {
    this.data = data;
  }
}
