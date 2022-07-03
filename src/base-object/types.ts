import { Meta } from './meta';
import { Property } from './property';

export type MetaList = {
  [p: PropertyKey]: Meta;
}
