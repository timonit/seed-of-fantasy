import { Property } from './property';

/**
 * Список свойств сущности
 */
export interface PropertyList {
  [p: string]: Property<any>;
}
