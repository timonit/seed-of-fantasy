import { Meta } from './meta';
import { PropertyList } from './property-list';

/**
 * Самый базовый объект всех сущностей.
 */
export abstract class Entity<
  P extends PropertyList,
  M extends Meta,
> {
  abstract entityName: string;

  properties: P;

  meta: M;

  constructor(propList: P, meta: M) {
    this.properties = propList;
    this.meta = meta;
  }

  init(context: any): void {
    Object.keys(this.properties).forEach((propName) => {
      this.properties[propName].init(this);
    });
    this.onOnited(context);
  }

  onOnited(context: any): void {}
}
