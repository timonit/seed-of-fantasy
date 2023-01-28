import { SimpleTypes } from '../types';

export type PropertyValueType =
  | 'object'
  | 'number'
  | 'string'
  | 'boolean'
  | 'array';

export type PropertyValue =
  | SimpleTypes
  | { [p: string]: SimpleTypes }
  | Array<string | number>;
