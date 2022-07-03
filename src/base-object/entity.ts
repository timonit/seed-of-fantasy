import { Meta } from './meta';
import { Property } from './property';
import { MetaList, PropList } from './types';

/**
 * Самый базовый объект всех сущностей.
 */
export abstract class Entity<M extends MetaList> {
  abstract entityName: string;

  private entityHierarchy: string[] = [];

  properties = new Set<Property<any>>();

  meta: M;

  constructor(meta: M, props: P) {
    this.meta = meta;
    props.forEach(this.properties.add);
  }

  abstract getMeta(): Meta {
    return {};
  }
}
