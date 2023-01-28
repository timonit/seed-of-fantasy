import { PropertyValue, PropertyValueType } from './types';

export interface PropertyDTO {
  name: string;
  valueType: PropertyValueType;
  value: PropertyValue;
}
