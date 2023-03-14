import { ID } from '../types';

export interface EntityPrototypeDTO {
  id: ID;
  name: string;
  properties: string[];
  prototype?: EntityPrototypeDTO['id'];
}
