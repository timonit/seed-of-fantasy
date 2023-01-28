import { Entity } from 'src/base-object/entity/entity';
import { DataStore } from '../base-object/data-store/data-store';
import { Factory } from 'src/base-object/factory';
import { Property } from 'src/base-object/property/property';
import { ID } from 'src/base-object/types';
import { EntityDTO } from 'src/base-object/entity/entity.dto';
import { EntityData } from 'src/base-object/entity/types';

export class EntityFactory extends Factory<Entity, DataStore> {
  generateEntityData(data: EntityDTO): EntityData {
    return {
      id: this.dataStore.generateEntityID(),
      description: data.description,
      name: data.name,
      prototype: data.prototype,
      properties: Object.entries(data.properties).reduce(
        (obj, [key, value]) => {
          return { ...obj, [key]: Property.instance(value) };
        },
        {}
      ),
    };
  }

  queryEntityDataByID(entityID: string): EntityData {
    const data = this.dataStore.getDataEntity(entityID);
    const dataEntity: EntityData = this.generateEntityData(data);

    return dataEntity;
  }

  isEntityDTO(o: any): o is EntityDTO {
    return 'id' in o && 'description' in o && 'name' in o && 'properties' in o;
  }

  create(simpleEntityData: EntityDTO): Entity;
  create(entityID: ID): Entity;
  create(arg: string | EntityDTO): Entity {
    const entityID = typeof arg === 'string' ? arg : undefined;
    const simpleEntityData = this.isEntityDTO(arg) ? arg : undefined;

    if (entityID) {
      return new Entity(this.queryEntityDataByID(entityID));
    }
    if (simpleEntityData) {
      return new Entity(this.generateEntityData(simpleEntityData));
    }

    throw new Error('Argument is not supported');
  }
}
