export type SimpleTypes = string | number | boolean;
export type ID = string;
export type PropertyValueType =
  | 'object'
  | 'number'
  | 'string'
  | 'boolean'
  | 'array';


export type PropertyValue = SimpleTypes | Record<string, SimpleTypes> | PropertyValue[];

export interface PropertyDTO<V extends PropertyValue = PropertyValue> {
  name: string;
  valueType: PropertyValueType;
  value: V;
}

export type EntityClassDescriptionDTO = {
  id: ID;
  name: string;
  properties: string[];
  prototype?: EntityClassDescriptionDTO['id'];
}

export interface EntityDTO {
  id: string;
  name: string;
  description: string;
  properties: { [p: string]: PropertyDTO };
  prototype?: EntityClassDescriptionDTO['id'];
}
