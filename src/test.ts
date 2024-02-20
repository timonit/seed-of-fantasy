import { Entity } from './base';

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

console.log('a', a.getProperty('window'));
console.log('name:', a.type);
