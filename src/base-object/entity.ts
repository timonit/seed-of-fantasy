import { Property } from './property';

export abstract class Entity {
  abstract entityName: string;

  abstract properties: { [key: string]: Property<any> };
}
