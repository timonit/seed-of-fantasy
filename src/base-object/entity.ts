import { Meta } from './meta';
import { PropertyList } from './property-list';
import { EventEmitterList } from './event-emitter-list';
import { EventSourceObject } from './event-source-object';

/**
 * Самый базовый объект всех сущностей.
 */
export abstract class Entity<P extends PropertyList, M extends Meta, EEL extends EventEmitterList> extends EventSourceObject<EEL> {
  abstract entityName: string;

  properties: P;

  meta: M;

  constructor(propList: P, meta: M, eventEmitterList: EEL) {
    super(eventEmitterList);
    this.properties = propList;
    this.meta = meta;
  }

  init(context: any): void {
    Object.keys(this.properties).forEach((propName) => {
      this.properties[propName].init(this);
    })
    this.onOnit(context);
  }

  onOnit(context: any): void {
  }
}
