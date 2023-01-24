import { Property } from './property';

export interface SimpleEntityData {
  id: string;

  name: string;

  description: string;

  properties: { [p: string]: any };
}

export interface EntityData {
  id: string;

  name: string;

  description: string;

  properties: { [p: string]: Property<any> };
}
