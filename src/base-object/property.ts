import { Entity } from './entity';
import { PropertyValueType, SimplePropertyData } from './types';

/**
 * Свойство
 */
export class Property<VALUE> {
  private propValueType: PropertyValueType;

  get valueType(): PropertyValueType {
    return this.propValueType;
  }

  private propName: string;

  get name(): string {
    return this.propName;
  }

  private propValue: VALUE;

  get value(): VALUE {
    return this.propValue;
  }

  set value(value: VALUE) {
    this.propValue = value;
  }

  protected owner?: Entity;

  protected constructor(data: SimplePropertyData) {
    this.propName = data.name;
    this.propValueType = data.valueType;

    switch (data.valueType) {
      case 'string':
        this.propValue = data.value;
        break;
      default:
        this.propValue = JSON.parse(data.value);
    }
  }

  static instance<V>(data: SimplePropertyData): Property<V> {
    return new this<V>(data);
  }

  setOwner(owner: Entity): void {
    this.owner = owner;
  }
}
