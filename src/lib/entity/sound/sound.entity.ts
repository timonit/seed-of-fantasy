import { Entity } from '../../base-object';
import { IWithCoordinates } from './i.with-coordinates';
import { Coordinates } from '../Coordinates';
import { SoundProps } from './sound.props';

export class SoundEntity extends Entity<SoundProps> implements IWithCoordinates {
  entityName = 'sound';

  coords: Coordinates;

  constructor(props: SoundProps, coords: Coordinates) {
    super(props);
    this.coords = coords;
  }
}
