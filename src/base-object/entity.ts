import { DataStore } from './data-store';
import { Property } from './property';
import { EntityData, SimpleEntityData } from './types';

/**
 * Самый базовый объект всех сущностей.
 */
export class Entity {
  data!: EntityData;

  get name(): string {
    return this.data.name;
  }

  get id(): string {
    return this.data.id;
  }

  get description(): string {
    return this.data.description;
  }

  getProperty<V>(propName: string): Property<V> {
    return this.data.properties[propName];
  }

  setData(data: EntityData) {
    this.data = data;
  }
}

class EntityFactory {
  dataStore: DataStore;

  constructor(dataStore: DataStore) {
    this.dataStore = dataStore;
  }

  queryDataByID(entityID: string): EntityData {
    const data = this.dataStore.getDataEntity(entityID);
    const dataEntity: EntityData = {
      id: data.id,
      description: data.description,
      name: data.name,
      properties: Object.entries(data.properties).reduce<{
        [p: string]: Property<any>;
      }>((obj, [key, value]) => {
        return { ...obj, [key]: Property.instance(key, value) };
      }, {}),
    };

    return dataEntity;
  }

  generateData(data: SimpleEntityData): EntityData {
    return {
      id: this.dataStore.generateEntityID(),
      description: '',
      name: '',
      properties: Object.entries(data.properties).reduce<{
        [p: string]: Property<any>;
      }>((obj, [key, value]) => {
        return { ...obj, [key]: Property.instance(key, value) };
      }, {}),
    };
  }

  isSimpleEntityData(o: any): o is SimpleEntityData {
    return 'id' in o && 'description' in o && 'name' in o && 'properties' in o;
  }

  create(simpleEntityData: SimpleEntityData): Entity;
  create(entityID: string): Entity;
  create(arg: string | SimpleEntityData): Entity {
    const entityID = typeof arg === 'string' ? arg : undefined;
    const simpleEntityData = this.isSimpleEntityData(arg) ? arg : undefined;
    const entity = new Entity();

    if (entityID) entity.setData(this.queryDataByID(entityID));
    if (simpleEntityData) entity.setData(this.generateData(simpleEntityData));

    return entity;
  }
}
