import { PowerProperty, SpeedProperty } from '../property';
import { Props } from '../../base-object';

export interface SoundProps extends Props {
  propagationSpeed: SpeedProperty;
  volume: PowerProperty;
}
