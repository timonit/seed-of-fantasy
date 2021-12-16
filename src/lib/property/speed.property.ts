import { Property } from '../../base-object';

/**
 * @description Свойство "Скорость". Измеряется в цифрах. Всегда положительное значение.
 */
export class Speed extends Property<number> {
  propertyName = 'speed';

  constructor(value: number) {
    super(Math.abs(value));
  }
}
