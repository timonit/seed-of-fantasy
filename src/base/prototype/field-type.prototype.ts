import { ID } from '../types';
import { EntityPrototype } from './entity.prototype';

/**
 * Прототип тип поля. На их основе создается поля и их значения.
 */
export class FieldTypePrototype extends EntityPrototype {
  isFieldType = true;

  section: string;

  constructor(id: ID, name: string, section: string, fields: EntityPrototype[] = []) {
    super(id, name, fields);

    this.section = section;
  }

  getState(): { [p: string]: any; } {
    const state = super.getState();
    state.section = this.section;

    return state;
  }
}
