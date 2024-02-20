import { ID } from './../types';
import { EntityField, EntityFields } from './types';


/**
 * Cушность
 */
export class Entity {
  protected fields: EntityFields;

  constructor(public id: ID, public type: string, fields: EntityFields) {
    this.fields = fields;
  }

  getProperty(fieldName: string): EntityField | undefined {
    return this.fields.find(el => el.name === fieldName);
  }
}
