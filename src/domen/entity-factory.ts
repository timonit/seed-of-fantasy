import { PropertyList } from './../base-object/types';
import { Entity } from 'src/base-object/entity';
import { DataStore } from './../base-object/data-store';
import { Factory } from 'src/base-object/factory';
import { EntityData, SimpleEntityData } from 'src/base-object/types';
import { Property } from 'src/base-object/property';

export class EntityFactory extends Factory<Entity, DataStore> {
  queryDataByID(entityID: string): EntityData<any> {
    const data = this.dataStore.getDataEntity(entityID);
    const dataEntity: EntityData = {
      id: data.id,
      description: data.description,
      name: data.name,
      properties: Object.entries(data.properties).reduce<{
        [p: string]: Property<any>;
      }>((obj, [key, value]) => {
        return { ...obj, [key]: Property.instance(value) };
      }, {}),
    };

    return dataEntity;
  }

  generateData<PROPS extends PropertyList>(
    data: SimpleEntityData
  ): EntityData<PROPS> {
    return {
      id: this.dataStore.generateEntityID(),
      description: '',
      name: '',
      properties: Object.entries(data.properties).reduce<PROPS>(
        (obj, [key, value]) => {
          return { ...obj, [key]: Property.instance(value) };
        },
        {} as PROPS
      ),
    };
  }

  isSimpleEntityData(o: any): o is SimpleEntityData {
    return 'id' in o && 'description' in o && 'name' in o && 'properties' in o;
  }

  create(simpleEntityData: SimpleEntityData): Entity;
  create(entityID: string): Entity;
  create<PROPS extends PropertyList>(
    arg: string | SimpleEntityData
  ): Entity<PROPS> {
    const entityID = typeof arg === 'string' ? arg : undefined;
    const simpleEntityData = this.isSimpleEntityData(arg) ? arg : undefined;

    if (entityID) {
      return new Entity<PROPS>(this.queryDataByID(entityID));
    }
    if (simpleEntityData) {
      return new Entity<PROPS>(this.generateData(simpleEntityData));
    }

    throw new Error('Argument is not supported');
  }
}
