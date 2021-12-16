import { Property } from '../../base-object';

export class Power extends Property<number> {
  propertyName = 'power';

  constructor(value: number) {
    super(Math.abs(value));
  }
}
