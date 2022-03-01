import { Entity } from './entity';

/**
 * Свойство сущности
 */
export abstract class Property<T>{
  abstract propertyName: string;

  private data: T;

  entity!: Entity<any, any, any>;

  getValue(): T {
    return this.data;
  }

  setValue(entity: Entity<any, any, any>, value: T): void {
    this.data = this.changeValue(entity, value);
  }

  init(entity: Entity<any, any, any>): void {
    this.entity = entity;
    this.onInit(this.entity);
  }

  onInit(entity: Entity<any, any, any>): void {
  }

  constructor(value: T) {
    this.data = value;
  }

  /**
   * Переопределите этот метод, если хотите добавить вычесление при установке значений
   */
  protected changeValue(entity: Entity<any, any, any>, value: T): T {
    return value;
  };
}
