import { PropertyDTO } from '../property/property.dto';
import { EntityPrototypeDTO } from './entity-prototype.dto';

export interface EntityDTO {
  id: string;
  name: string;
  description: string;
  properties: { [p: string]: PropertyDTO };
  prototype?: EntityPrototypeDTO['id'];
}
