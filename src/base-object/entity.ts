import { Meta } from './meta';
import { EventList } from './event-list';
import { PropertyList } from './property-list';

/**
 * Самый базовый объект всех сущностей.
 * Принимает объект типа Props, в котором перечислены все "свойства" сущности.
 */
export abstract class Entity<P extends PropertyList, M extends Meta> {
  abstract entityName: string;

  properties: P;

  meta: M;

  events = new EventList();

  constructor(propList: P, meta: M) {
    this.properties = propList;
    this.meta = meta;
  }
}
