import { PropertyDTO } from '../property/property.dto';
import { EntityClassDescriptionDTO } from './entity-class-description.dto';

export interface EntityDTO {
  id: string;
  name: string;
  description: string;
  properties: { [p: string]: PropertyDTO };
  prototype?: EntityClassDescriptionDTO['id'];
}
