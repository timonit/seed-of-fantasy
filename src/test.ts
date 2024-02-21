import { Entity } from './base';
import { EntityPrototype, FieldTypePrototype } from './base/prototype';

const vehiclePrototype = new FieldTypePrototype('veh', 'vehicle', 'simple');

const enginePrototype = new FieldTypePrototype('eng', 'engine', 'simple');

const carPrototype = new EntityPrototype(
  'c',
  'car',
  [
    vehiclePrototype,
    enginePrototype
  ]
);

const a = new Entity(
  "testId",
  "car",
  [
    {
      category: 'wheels',
      name: 'vehicle',
      value: 4
    },
    {
      category: 'glass',
      name: 'window',
      value: 5
    }
  ]
);

console.log('a', a);
