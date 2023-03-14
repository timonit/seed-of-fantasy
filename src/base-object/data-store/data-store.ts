import { EntityDTO } from './../entity/entity.dto';

export interface DataStore {
  getDataEntity(EntityID: string): EntityDTO;

  generateEntityID(): string;
}
