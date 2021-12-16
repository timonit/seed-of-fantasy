import {
  ObjectEntity,
  EntityWithCoordinatesEntityPropertyList,
} from './object/object.entity';
import { CoordinateProperty, SpeedProperty } from '../property';

interface WindPropertyList extends EntityWithCoordinatesEntityPropertyList {
  speed: SpeedProperty;
}

class PropertyListFactory {
  static getWindPropertyList(): WindPropertyList {
    return {
      speed: new SpeedProperty(12),
      coords: new CoordinateProperty({ x: 1, y: 2, z: 3 }),
    };
  }
}

export class Wind extends ObjectEntity<WindPropertyList> {
  setSpeed(speed: number): void {
    this.properties.speed = new SpeedProperty(speed);
  }
}

const a = new Wind(PropertyListFactory.getWindPropertyList());
