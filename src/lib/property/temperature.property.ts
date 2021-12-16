import { Property } from '../../base-object';

/**
 * @description Свойство "Температура". Измеряется в цифрах.
 */
export class Temperature extends Property<number> {
  propertyName: string = 'temperature';
}
