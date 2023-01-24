import { Entity } from './entity';

/**
 * Свойство
 */
export class Property<VALUE> {
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

  protected constructor(name: string, value: VALUE) {
    this.propName = name;
    this.propValue = value;
  }

  static instance<V>(name: string, value: V): Property<V> {
    return new this<V>(name, value);
  }

  setOwner(owner: Entity): void {
    this.owner = owner;
  }
}
