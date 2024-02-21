import { ID } from '../types';

/**
 * Прототип сущности. Собирает сущность и его поля. на их основе создаются сущности
 */
export class EntityPrototype {
  id: ID;

  name: string;

  private fields: EntityPrototype[] = [];

  constructor(id: ID, name: string, fields: EntityPrototype[] = []) {
    this.id = id;
    this.name = name;
    this.fields = fields;
  }

  addField(field: EntityPrototype) {
    this.fields.push(field);
  }
  
  getFieldByID(id: string): EntityPrototype | undefined {
    return this.fields.find(field => id === field.id);
  }

  getManyField(ids: string[]): EntityPrototype[] {
    const fields: EntityPrototype[] = [];

    this.fields.forEach((field) => {
      if (ids.includes(field.id)) fields.push(field);
    });

    return fields;
  }

  getAllFieldsName(): string[] {
    return this.fields.map((field) => field.name);
  }

  getAllFields(): typeof this.fields {
    return {...this.fields};
  }

  removeField(id: string) {
    this.fields = this.fields.filter(field => field.id !== id);
  }

  removeManyField(ids: string[]) {
    this.fields = this.fields.filter(field => !ids.includes(field.id));
  }

  getState(): {[p: string]: any} {
    return {
      id: this.id,
      name: this.name,
      fields: this.fields,
    }
  }

  static createEntity( ) {
    
  }
}
