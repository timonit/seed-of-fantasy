import { SimpleEntityData } from './types';
export interface DataStore {
  getDataProperty<T = any>(entityID: string, propName: string): T

  getDataEntity(EntityID: string): SimpleEntityData;

  generateEntityID(): string;
}
