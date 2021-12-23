import { Entity } from './entity';

/**
 * Свойство сущности
 */
export abstract class Property<T>{
  abstract propertyName: string;

  private data: T;

  getValue(): T {
    return this.data;
  }

  setValue(entity: Entity<any, any>, value: T): void {
    this.data = this.changeValue(entity, value);
  }

  constructor(value: T) {
    this.data = value;
  }

  /**
   * Переопределите этот метод, если хотите добавить вычесление при установке значений
   */
  protected changeValue(entity: Entity<any, any>, value: T): T {
    return value;
  };
}
