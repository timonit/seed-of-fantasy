import { EntityDTO } from './../entity/entity.dto';

export interface DataStore {
  getDataProperty<T = any>(entityID: string, propName: string): T;

  getDataEntity(EntityID: string): EntityDTO;

  generateEntityID(): string;
}
