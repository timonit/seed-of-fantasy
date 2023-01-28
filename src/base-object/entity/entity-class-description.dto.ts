import { ID } from '../types';

export interface EntityClassDescriptionDTO {
  id: ID;
  name: string;
  properties: string[];
  prototype?: EntityClassDescriptionDTO['id'];
}
