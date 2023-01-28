import { Property } from '../property/property';
import { EntityDTO } from './entity.dto';

export type PropList = { [p: string]: Property };

export type EntityData<P extends PropList = PropList> = Omit<
  EntityDTO,
  'properties'
> & {
  properties: P;
};
