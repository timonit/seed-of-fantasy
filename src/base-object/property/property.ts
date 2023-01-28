import { PropertyDTO } from './property.dto';
import { Entity } from '../entity/entity';

/**
 * Свойство
 */
export class Property {
  private data: PropertyDTO;

  get valueType(): typeof this.data['valueType'] {
    return this.data.valueType;
  }

  get name(): typeof this.data['name'] {
    return this.data.name;
  }

  get value(): typeof this.data['value'] {
    return this.data.value;
  }

  set value(value: typeof this.data['value']) {
    this.data.value = value;
  }

  protected owner?: Entity;

  protected constructor(data: PropertyDTO) {
    this.data = data;
  }

  static instance(data: PropertyDTO): Property {
    return new this(data);
  }

  setOwner(owner: Entity): void {
    this.owner = owner;
  }
}
